import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer0',
  };

  render() {
    const props = { ...this.props };
    delete props.isMode;
    return (<OverPack
      {...props}
      playScale={0.05}
      hideProps={{ footer: { reverse: true } }}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <span id={`${props.id}-content`}>
          Copyright © 2021 The Project by <a href="#">EI Solutions</a>. Alle rettigheter bevart
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
