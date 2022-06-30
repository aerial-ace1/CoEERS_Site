import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
// import { Lectures } from '../../components/Conference/Lectures';
// import { Apply } from '../../components/Conference/Apply';
import AnnouncedSoon from '../../components/AnnouncedSoon';
import { KeynoteSpeakers } from '../../components/KeynoteSpeakers';

const Filler = ({ title, text }) => (
  <div>
    <h1 className="mb-5">{title}</h1>
    <AnnouncedSoon text={text} />
  </div>
);

const ConferencePage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'LECTURES',
      to: `${url}/lectures`
    },
    {
      name: 'KEYNOTE SPEAKERS',
      to: `${url}/keynotelectures`
    },
    {
      name: 'TUTORIAL SPEAKERS',
      to: `${url}/tutorialspeakers`
    }
  ];
  const Content = [
    {
      name: 'LECTURES',
      path: `${path}`,
      content: <Filler title="LECTURES" text="Will be updated" />
    },
    {
      name: 'KEYNOTE SPEAKERS',
      path: `${path}/keynotelectures`,
      content: <KeynoteSpeakers />
    },
    {
      name: 'LECTURES',
      path: `${path}/lectures`,
      content: <Filler title="LECTURES" text="Will be updated" />
    },
    {
      name: 'TUTORIAL SPEAKERS',
      path: `${path}/tutorialspeakers`,
      content: <Filler title="TUTORIAL SPEAKERS" text="Will be updated" />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="CONFERENCE" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default ConferencePage;
