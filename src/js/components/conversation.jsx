import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { createMarkup } from 'utils/html';
import { MessageComponent } from 'components/message.jsx';

export class ConversationComponent extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            logoIsAnchored: true
        };
        this.scrollTimeouts = [];
    }

    scrollToBottom() {
        let timeout = setTimeout(() => {
            let container = findDOMNode(this);
            let logo = this.refs.logo;
            let scrollTop = container.scrollHeight - container.clientHeight - logo.clientHeight;
            container.scrollTop = scrollTop;
        });
        this.scrollTimeouts.push(timeout);
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentWillUnmount() {
        this.scrollTimeouts.forEach(clearTimeout);
    }

    render() {
        const messages = this.props.conversation.messages.map((message) => <MessageComponent key={ message._id } {...message} />);

        return (
            <div id='sk-conversation' ref='container'>
                <div ref='intro'
                     className='sk-intro'
                     dangerouslySetInnerHTML={ createMarkup(this.props.ui.text.introText) }></div>
                <div className='sk-messages-container'>
                    <div ref='messages' className='sk-messages'>
                        { messages }
                    </div>
                    <div className='sk-logo' ref='logo'>
                        <a href='https://smooch.io/?utm_source=widget' target='_blank'><span>In-App Messaging by</span> <img className='sk-image'
                                                                                                                            src={ require('images/logo_webwidget.png') }
                                                                                                                            srcSet={ `${require('images/logo_webwidget.png')} 1x, ${require('images/logo_webwidget_2x.png')} 2x` }
                                                                                                                            alt='Smooch' /></a>
                    </div>
                </div>
            </div>
            );
    }
}

export const Conversation = connect((state) => {
    return {
        ui: state.ui,
        conversation: state.conversation
    };
})(ConversationComponent);
