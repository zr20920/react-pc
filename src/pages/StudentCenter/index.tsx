import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom'
import { Card, Row, Col, Tabs } from 'antd'
import ClassRoster from '@/pages/StudentCenter/ClassRoster'
import EnrolledStudents from '@/pages/StudentCenter/EnrolledStudents'

const { TabPane } = Tabs

const stateValue = {
  tabList: [
    {
      name: '班级花名册',
      path: '/class-roster',
      component: ClassRoster,
    },
    {
      name: '报读学生',
      path: '/enrolled-students',
      component: EnrolledStudents,
    },
  ],
}

const Subjects = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const location = useLocation()

  return (
    <>
      <Card className="card-header-tabs">
        <Row align="middle" justify="space-between">
          <Col>
            <Tabs
              activeKey={location.pathname}
              tabBarGutter={60}
              onTabClick={(key) => history.push(key)}
            >
              {stateValue.tabList.map((item) => (
                <TabPane tab={item.name} key={`${match.path}${item.path}`} />
              ))}
            </Tabs>
          </Col>
        </Row>
      </Card>
      <Switch>
        {stateValue.tabList.map((item) => (
          <Route
            exact
            path={`${match.path}${item.path}`}
            component={item.component}
            key={item.path}
          />
        ))}
        <Redirect to={`${match.path}/class-roster`} />
      </Switch>
    </>
  )
}

export default Subjects
