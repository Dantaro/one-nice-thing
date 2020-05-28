import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AppShell } from 'appshell'
import { Home } from 'page/home'
import { List } from 'page/list'
import { About } from 'page/about'
import { Statistics } from 'page/statistics'

export default () => (
    <AppShell>
        <Switch>
            <Route path="/statistics" component={Statistics} />
            <Route path="/about" component={About} />
            <Route path="/list" component={List} />
            <Route path="/" component={Home} />
        </Switch>
    </AppShell>
)
