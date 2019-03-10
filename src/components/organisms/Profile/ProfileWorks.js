import React from 'react';

import {
  ProfileCard, TitleName, DescriptionList, Term, Description,
} from '.';
import { FlexWrapper, OnlySPWrapper, OnlyPCWrapper } from './style';

export default () => (
  <ProfileCard>
    <TitleName>Works</TitleName>

    <DescriptionList>
      {[
        {
          term: '業務',
          icon: 'fas fa-coffee',
          desc: 'Webアプリ開発 / サイト制作',
        },
        {
          term: '開発言語',
          icon: 'fas fa-wrench',
          desc: (
            <span>
                React
              <OnlySPWrapper>
                <br />
              </OnlySPWrapper>
              {' '}
                / Pug / SCSS
            </span>
          ),
        },
        {
          term: 'ツール',
          icon: 'fas fa-toolbox',
          desc: 'Github / InVision / Parcel / Wordpress',
        },
      ].map(v => (
        <FlexWrapper between key={v.term}>
          <Term>
            <OnlyPCWrapper>{v.term}</OnlyPCWrapper>
            <OnlySPWrapper>
              <i className={v.icon} />
            </OnlySPWrapper>
          </Term>
          <Description>{v.desc}</Description>
        </FlexWrapper>
      ))}
    </DescriptionList>
  </ProfileCard>
);
