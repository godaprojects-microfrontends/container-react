import React from 'react';

class MicrofrontendVue extends React.Component {
    componentDidMount() {
        const { name, host, document } = this.props;
        const scriptId = `micro-frontend-script-${name}`;
        if (document.getElementById(scriptId)) {
            this.renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
            let script = document.createElement('script');
            script.id = scriptId;
            script.crossOrigin = '';
            script.src = `${host}/${manifest['app.js']}`;
            document.head.appendChild(script);

            script = document.createElement('script');
            script.id = scriptId;
            script.crossOrigin = '';
            script.src = `${host}/${manifest['chunk-vendors.js']}`;
            script.onload = this.renderMicrofrontend;
            document.head.appendChild(script);
        });

    }
 
    componentWillUnmount() {
        const { name, window } = this.props;
        window[`unmount${name}`](`${name}-container`);
    }

    renderMicrofrontend = () => {

        const { name, window, history, data } = this.props;
        window[`render${name}`](`${name}-container`, data);
    }

    render() {
        return <main id={`${this.props.name}-container`} />;
    }

}

MicrofrontendVue.defaultProps = {
    document,
    window,
};
  
export default MicrofrontendVue;