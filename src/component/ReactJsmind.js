// hash="adssssssssss";
import React, { Component } from 'react';
// import JsMind from 'jsmind';

class ReactJsmind extends Component {
  constructor(props) {
    super(props);
    this.co = '';
  }
  // componentDidMount() {
  //   const { baseData } = this.props;
  //   const mind = {
  //     meta: {
  //       name: '案件',
  //       author: '',
  //       version: '0.2',
  //     },
  //     format: 'node_array',
  //     data: [],
  //   };
  //   const options = {
  //     container: 'jsmind_container',
  //     theme: 'self',
  //     editable: true,
  //     mode: 'side',
  //     format: 'node_array',
  //     support_html: true,
  //     view: {
  //       line_color: '#DAA520',
  //     },
  //   };
  //   mind.data = baseData;
  //   let jm;
  //   if (typeof JsMind.current === 'undefined' || this.container.childNodes.length === 0) {
  //     jm = new JsMind(options);
  //   } else {
  //     jm = JsMind.current;
  //   }
  //   jm.show(mind);
  // }
  render() {
    return (<div id="jsmind_container">123</div>);
  }
}
export default ReactJsmind;
