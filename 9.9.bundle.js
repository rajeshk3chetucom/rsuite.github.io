/*! Last update: Sat Aug 13 2016 21:22:35 GMT+0800 (CST) */
webpackJsonp([9],{375:function(t,d,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(d,"__esModule",{value:!0});var o=e(3),a=n(o),l=e(254),r=e(338),s=n(r),i=e(335),u={basic:'const ModalsBasic = React.createClass({\n    getInitialState() {\n        return {\n            showModal: false,\n            autoResizeHeight: false\n        };\n    },\n    close() {\n        this.setState({\n            showModal: false\n        });\n    },\n    open(event) {\n\n        this.setState({\n            showModal: true,\n            autoResizeHeight: event.currentTarget.innerText === \'Auto Resize Height\'\n        });\n    },\n    render() {\n        return (\n            <div className="modal-container">\n                <ButtonToolbar>\n                      <Button shape="default" onClick={this.open}> Show Modal</Button>\n                      <Button shape="default" onClick={this.open}> Auto Resize Height</Button>\n                </ButtonToolbar>\n                <Modal autoResizeHeight = {this.state.autoResizeHeight} show={this.state.showModal} onHide={this.close}>\n                    <Modal.Header>\n                        <Modal.Title>About Hypers</Modal.Title>\n                    </Modal.Header>\n                    <Modal.Body>\n                        <h4>HYPERS 引领企业大数据营销</h4>\n                        <p>我们致力于将数据资产化，驱动数据解决实际问题，把数据变得好用和有用，创造更为智能的互联世界。</p>\n                        <p>聚集了来自Google，微软，惠普，埃森哲等众多精英，自主研发了世界一流的大规模实时数据服务平台和第一方全营销链DMP。</p>\n                        <p>HyperS的数据业务日均服务几千万互联网用户，分析超过70亿PV，集成包括微博、微信、EDM、电商、移动APP、在线广告、网站、CRM等各种传播渠道，帮助我们的合作伙伴全方位的收集数据，处理数据，洞悉数据，并最终让数据为合作伙伴赢得客户，获得更大的收益。</p>\n                        <p>HyperS的技术和服务已经帮助众多一流企业获得更好的用户体验及更好的投资回报。</p>\n\n                        <h4>为什么选择我们</h4>\n                        <p>宏路数据坚持自主创新，沉淀了丰富和坚实的企业级大数据技术和应用实践，软件著作、专利、技术创新过百项。目前宏路数据的业务已经拓展至金融、汽车、电信、政府、媒体、互联网等多个行业，使企业能够快速、低成本地使用成熟的大数据技术和应用服务，帮助企业在“互联网+”时代获得大数据能力并转化为生产力。</p>\n                        <p>技术 - 实现海量多源异构数据整合、挖掘、系统化、智能化、可视化</p>\n                        <p>数据 - 融合数据，推动数据流转</p>\n                        <p>产品 - 全面覆盖大数据的各个层级，一站式完成大数据部署、管理及应用</p>\n\n                        <h4>我们的文化</h4>\n                        <p>创新 开放 激情 有趣 诚信</p>\n                        <p>我们渴求意志坚定、睿智创新的人；我们看重能力胜于经历。</p>\n                        <p>我们有着相同的目标与愿景，我们坚实的步伐成就了如今的Hypers，我们毕业于不同的学校，来自不同的城市，我们的客户服务不仅仅是国内市场，更在国际市场上打造别样天空。Hypers在大数据营销技术独占一角。</p>\n                        <p>工作之余，Hypers员工们也有着各种兴趣与爱好，篮球、足球、羽毛球；</p>\n                        <p>吃货群：火锅、烤肉、brunch、日料、减肥神马的抛脑后；</p>\n                        <p>年年旅游、月月庆生，各种节日不定时登场。</p>\n                        <p>我们力求保持创业公司的开放文化。扁平化管理的背景下，每个人都是亲自参与的贡献者，可以毫无顾忌地交流各自的想法和观点。我们的茶水间为Hypers员工进行组内交流和跨组交流提供了便利，大家在休闲娱乐的同时，还可进行工作方面的交谈。</p>\n                    </Modal.Body>\n                    <Modal.Footer>\n                        <Button onClick={this.close} shape="primary">Confirm</Button>\n                        <Button onClick={this.close} shape="default">Cancel</Button>\n                    </Modal.Footer>\n                </Modal>\n\n            </div>\n        );\n    }\n});\n\n\nReactDOM.render(<ModalsBasic />, mountNode);\n'};d["default"]=a["default"].createClass({displayName:"modals",render:function(){return a["default"].createElement(l.Col,{md:9,sm:12},a["default"].createElement("h1",{className:"page-header"},"Modals",a["default"].createElement("span",{className:"page-header-en"},a["default"].createElement("code",null,"Modal.Header"),"、",a["default"].createElement("code",null,"Modal.Title"),"、",a["default"].createElement("code",null,"Modal.Body"),"、",a["default"].createElement("code",null,"Modal.Footer"))),a["default"].createElement("h3",null,"默认样式"),a["default"].createElement(s["default"],{code:u.basic}),a["default"].createElement("h3",null,"组件属性"),a["default"].createElement(i.Markdown,null,e(376)))}})},376:function(t,d){t.exports="<table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>animation</td> <td>boolean</td> <td>true</td> <td>show或hide的时候有个渐变的动画</td> </tr> <tr> <td>autoResizeHeight</td> <td>boolean</td> <td>true</td> <td>body内容过长时自动设置高度</td> </tr> <tr> <td>autoFocus</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>backdrop</td> <td>one of: <code>static</code>, true, false</td> <td></td> <td></td> </tr> <tr> <td>classPrefix</td> <td>string</td> <td><code>modal</code></td> <td></td> </tr> <tr> <td>dialogComponentClass</td> <td>elementType</td> <td>ModalDialog</td> <td></td> </tr> <tr> <td>dialogClassName</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>enforceFocus</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>keyboard</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>onHide</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onEnter</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onEntering</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onEntered</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onExit</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onExiting</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onExited</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>show</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>size</td> <td>one of: <code>lg</code>, <code>sm</code></td> <td></td> <td></td> </tr> </tbody> </table>"}});