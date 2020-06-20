// @flow

import type {MarkdownConfigType} from './markdown-type';
import markdownStyle from './markdown.scss';

export const defaultMarkdownConfig: MarkdownConfigType = {
    useLineBreak: false,
    wrapperClassName: markdownStyle.markdown_wrapper,
};