// @flow

import type {PairTagSelectorType} from '../parser/parser-type';
import {emptyString, pairTagSelectorList} from '../parser/parser-const';

type StringPartNameType = 'open-tag' | 'close-tag' | 'self-close-tag' | 'text';

const stringPartNameMap: {+[key: string]: StringPartNameType} = {
    openTag: 'open-tag',
    closeTag: 'close-tag',
    selfCloseTag: 'self-close-tag',
    text: 'text',
};

type StringPartType = {|
    +content: string,
    +type: StringPartNameType,
    +tagName: string,
|};

/*
function getTagTextList(html: string): Array<StringPartType> {


}
*/

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
    let result = '';

    pairTagSelectorList.forEach((pairTagSelector: PairTagSelectorType) => {
        result = addPairTag(result, pairTagSelector);
    });

    return html;
}