import React from 'react';

import {
  ProfileCard, TitleName, DescriptionList, Term, Description,
} from '.';
import { FlexWrapper, OnlySPWrapper, OnlyPCWrapper } from './style';

export default props => (
  <ProfileCard>
    <TitleName>
        SYUNSUKE
      <br />
KOBASHI
    </TitleName>

    <DescriptionList>
      {[
        {
          term: '名前',
          icon: 'fas fa-glasses',
          desc: (
            <span>
                小橋俊介
              <OnlyPCWrapper>(コバシ シュンスケ)</OnlyPCWrapper>
              <OnlySPWrapper>
                <br />
                <small>(コバシ シュンスケ)</small>
              </OnlySPWrapper>
            </span>
          ),
        },
        {
          term: '誕生日',
          icon: 'fas fa-birthday-cake',
          desc: '1992/02/23',
        },
        {
          term: '仕事',
          icon: 'fas fa-briefcase',
          desc: 'ビジネスと開発',
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
