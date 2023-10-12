import { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { Button } from "..";

import cx from './index.module.scss';

export enum ETabsView {
  TABS = 'tabs',
  BUTTONS = 'buttons',
}

interface IProps {
  tabs: { id: number; title: string | ReactNode; content: ReactNode }[];
  activeTab?: number;
  setActiveTab?: (activeTab: number) => void;
  view?: ETabsView;
  className?: string;
  tabHeader?: ReactNode;
}

export const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
  view = ETabsView.TABS,
  className,
  tabHeader,
}: IProps) => {
  const [active, setActive] = useState(activeTab || tabs[0].id);

  const onTitleClick = (id: number) => {
    setActive(id);
    if (setActiveTab) {
      setActiveTab(id);
    }
  };

  return (
    <div className={className}>
      <div className={view === ETabsView.TABS ? cx.tabsTitle : cx.btnsTitle}>
        {tabs.map((item) => {
          return (
            <>
              {view === ETabsView.TABS ? (
                <div
                  key={item.id}
                  className={classNames(
                    { [cx.active]: item.id === active },
                    cx.tabTitle,
                  )}
                  onClick={() => onTitleClick(item.id)}
                >
                  <p>{item.title}</p>
                </div>
              ) : (
                <Button
                  key={item.id}
                  isActive={item.id === active}
                  className={cx.btnTitle}
                  onClick={() => onTitleClick(item.id)}
                  size="small"
                >
                  {item.title}
                </Button>
              )}
            </>
          );
        })}
      </div>
      <div
        className={classNames(
          cx.tabContent,
          view === ETabsView.TABS ? cx.tabContent__bordered : null,
        )}
      >
        {tabHeader && tabHeader}
        {tabs.find((item) => item.id === active)?.content}
      </div>
    </div>
  );
};
