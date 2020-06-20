// @flow

import type {LineDataType, OlAttributeType, PairTagSelectorType, SelectorType} from '../parser/parser-type';
import {
    breakLineTag,
    emptyString,
    olNumericType,
    oLParseDataList,
    pairTagSelectorList,
    space,
} from '../parser/parser-const';

export const breakLineRegExp = /\s*?\\$/;

export function addBreakLine(line: string): string {
    return line.replace(breakLineRegExp, '<br/>');
}

export function removeEndBreakLine(line: string): string {
    return line.replace(breakLineRegExp, emptyString);
}

export function getHasEndBreakLine(lineContent: string, useLineBreak: boolean): boolean {
    return useLineBreak || breakLineRegExp.test(lineContent);
}

export const htmlPairTag = /<(\w+)[^>]*>[\S\s]*?<\/\1>/;
export const htmlSingleTag = /<\w+[^>]*?\s*\/>/;

function imageReplacer(matchedString: string, alt: mixed, src: string, title: mixed): string {
    const titleAttrValue = typeof title === 'string' ? ' title="' + title + '"' : '';
    const altAttrValue = typeof alt === 'string' ? ' alt="' + alt + '"' : '';

    return `<img loading="lazy" src="${src}"${altAttrValue}${titleAttrValue}/>`;
}

const findImageRegExpGlobal = /!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g;

export function makeImage(html: string): string {
    return html.replace(findImageRegExpGlobal, imageReplacer);
}

export function isImageListOnly(lineContent: string): boolean {
    return lineContent.replace(findImageRegExpGlobal, '').trim() === emptyString;
}

const findLinkRegExpGlobal = /\[([\S\s]*?)]\((\S+?)\)/g;

function linkReplacer(matchedString: string, linkText: string, href: string): string {
    const text = linkText.length > 0 ? linkText : href;

    return `<a href="${href}">${text}</a>`;
}

export function makeLink(html: string): string {
    return html.replace(findLinkRegExpGlobal, linkReplacer);
}

function canBeWrapper(html: string): boolean {
    const openTagList = html.match(/<[^/]*?>/g) || []; // open tags
    const closeTagList = html.match(/<\/\S*?>/g) || []; // close tags

    return openTagList.length === closeTagList.length;
}

function addPairTag(html: string, pairTagSelector: PairTagSelectorType): string {
    const {selector, openTag, closeTag} = pairTagSelector;

    const chunkList = html.split(selector);

    // no selector include
    if (chunkList.length === 1) {
        return html;
    }

    const validatedChunkList: Array<string> = [];

    let candidate = '';

    let isTagOpen = false;

    // eslint-disable-next-line no-loops/no-loops
    for (const chunk of chunkList) {
        if (isTagOpen) {
            candidate += chunk;
            if (canBeWrapper(candidate)) {
                validatedChunkList.push(candidate);
                isTagOpen = false;
                candidate = '';
            }
        } else {
            validatedChunkList.push(chunk);
            isTagOpen = true;
        }
    }

    return validatedChunkList
        .map((chunk: string, chunkIndex: number): string => {
            if (chunkIndex % 2 === 0) {
                return chunk;
            }

            // check for unclosed 'tag'
            if (validatedChunkList.length - 1 === chunkIndex) {
                return selector + chunk;
            }

            return openTag + chunk + closeTag;
        })
        .join(emptyString);
}

export function makePairTag(html: string): string {
    let result = html;

    pairTagSelectorList.forEach((pairTagSelector: PairTagSelectorType) => {
        result = addPairTag(result, pairTagSelector);
    });

    return result;
}

export function getOlTypeBySelector(dataLineSelector: SelectorType): OlAttributeType {
    // eslint-disable-next-line no-loops/no-loops
    for (const oLParseData of oLParseDataList) {
        const {selector, olAttributeType} = oLParseData;

        if (dataLineSelector === selector) {
            return olAttributeType;
        }
    }

    console.error('Can not detect ol type by selector', dataLineSelector);

    return olNumericType;
}

export function getOlStart(trimmedLine: string): string {
    const dotIndex = trimmedLine.indexOf('.');

    return trimmedLine.slice(0, dotIndex);
}

// eslint-disable-next-line complexity
export function renderAdditionalLineList(lineData: LineDataType): string {
    const {additionalLineList, useLineBreak} = lineData;

    if (additionalLineList.length === 0) {
        return emptyString;
    }

    const hasParentEndBreakLine = getHasEndBreakLine(lineData.lineContent, useLineBreak);
    const prefix = hasParentEndBreakLine ? breakLineTag : space;
    const additionalLineListLength = additionalLineList.length;
    const additionalLineLastIndex = additionalLineListLength - 1;
    const lineResult: Array<string> = new Array<string>(additionalLineListLength).fill('');

    // eslint-disable-next-line no-loops/no-loops
    for (let lineIndex = 0; lineIndex < additionalLineListLength; lineIndex += 1) {
        const additionalLine = additionalLineList[lineIndex];
        const hasBreakLine = getHasEndBreakLine(additionalLine, useLineBreak);

        if (hasBreakLine) {
            const additionalLineWithoutBreakLine = additionalLine.replace(breakLineRegExp, emptyString);

            if (lineIndex === additionalLineLastIndex) {
                lineResult[lineIndex] = additionalLineWithoutBreakLine;
            } else {
                lineResult[lineIndex] = additionalLineWithoutBreakLine + breakLineTag;
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (lineIndex === additionalLineLastIndex) {
                lineResult[lineIndex] = additionalLine;
            } else {
                lineResult[lineIndex] = additionalLine + space;
            }
        }
    }

    return prefix + lineResult.join(emptyString);
}
