import React from 'react';
import Markdown from 'react-markdown/with-html';
import { globalStrReplace } from 'util/functions';


const MarkdownViewer = (props) => {
    console.log('Log: MarkdownViewer -> props', props)
    //replace ImageHost
    const newSrc = globalStrReplace(props.source, 'https://tb.primex-bd.com/wp', 'http://travelbd.xyz')

    return (
        <Markdown
            {...props}
            source={newSrc || props.source || ''}
            escapeHtml={false}
        />
    );
}

export default MarkdownViewer;