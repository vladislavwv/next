import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import React from 'react';
import '../node_modules/rc-banner-anim/assets/index.css';
import '../node_modules/rc-tween-one/assets/index.css';


const { Element } = BannerAnim;
const BgElement = Element.BgElement;
export default function Demo() {
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [<Element key="aaa"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne1">
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>,
      <Element key="bbb"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne2">
            Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>],
    };
  }

  componentDidMount() {
    const children = this.state.children;

    setTimeout(() => {
      children.push(
        <Element key="ccc"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
              backgroundSize: 'cover',
            }}
          />
          <QueueAnim name="QueueAnim">
            <h1 key="h1">Ant Motion Demo</h1>
            <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
          </QueueAnim>
          <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne2">
            Ant Motion Demo.Ant Motion Demo
          </TweenOne>
        </Element>
      );
      this.setState({
        children,
      });
    }, 2000);
  }

  render() {
    return (
      <BannerAnim type="grid">
        {this.state.children}
      </BannerAnim>
    );
  }
}
return <Demo />
}
