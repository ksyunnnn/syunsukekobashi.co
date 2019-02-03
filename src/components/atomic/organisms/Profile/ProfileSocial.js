import React, { Component } from 'react';

import { ProfileCard, TitleName, DescriptionList } from './';
import { AnchorStyled } from './style';

class Social {
  constructor(name,url,icon){
    this.name = name;
    this.url = url;
    this.icon = icon;
  }
  getAnchor() {
    return <AnchorStyled href={this.url} target="_blank">{this.icon}</AnchorStyled>
  }
}

const socials = {
  twitter: new Social("Twitter","https://twitter.com/ksyunnnn",<i className="fab fa-twitter-square" />),
  facebook: new Social("Facebook","https://www.facebook.com/ksyunnnn",<i className="fab fa-facebook-square" />),
  medium: new Social("Medium","https://medium.com/syunsukekobashi",<i className="fab fa-medium" />),
  github: new Social("Github","https://github.com/ksyunnnn",<i className="fab fa-github-square" />),
}

export default props => {
  return (
    <ProfileCard>
      <TitleName>Social Account</TitleName>
      <DescriptionList>
        {socials.twitter.getAnchor()}
        {socials.facebook.getAnchor()}
        {socials.medium.getAnchor()}
        {socials.github.getAnchor()}
      </DescriptionList>
    </ProfileCard>
  );
};
