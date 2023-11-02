import React from 'react';
import { DrawerItem } from '../DrawerItem';
import { moderateScale } from '../../../utils/layout';
import { useLayout } from '../../../hooks/useLayout';
import UserStroke from '../../../assets/icons/user-stroke.svg';
import ListStroke from '../../../assets/icons/list-stroke.svg';
import TopicStroke from '../../../assets/icons/topic-stroke.svg';
import BookmarkStroke from '../../../assets/icons/bookmark-stroke.svg';
import LightningStroke from '../../../assets/icons/lightning-stroke.svg';

export const DrawerItemList: React.FC = () => {
  const { theme } = useLayout();

  const iconStyleGuidelines = {
    width: moderateScale(20),
    fontSize: moderateScale(20),
    color: theme.colors.darkenText,
  };

  return (
    <>
      <DrawerItem
        callback={() => {}}
        text={'Profile'}
        icon={<UserStroke {...iconStyleGuidelines} />}
      />
      <DrawerItem
        callback={() => {}}
        text={'Lists'}
        icon={<ListStroke {...iconStyleGuidelines} />}
      />
      <DrawerItem
        callback={() => {}}
        text={'Topics'}
        icon={<TopicStroke {...iconStyleGuidelines} />}
      />
      <DrawerItem
        callback={() => {}}
        text={'Bookmarks'}
        icon={<BookmarkStroke {...iconStyleGuidelines} />}
      />
      <DrawerItem
        callback={() => {}}
        text={'Moments'}
        icon={<LightningStroke {...iconStyleGuidelines} />}
      />
    </>
  );
};
