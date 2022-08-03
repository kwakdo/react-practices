import React from 'react';
import {Outlet} from 'react-router';
import SiteLayout from "../../layout/SiteLayout";
import Navigation from './Navigation';

export default function Main() {
    return (
        <SiteLayout>
            <Navigation />
            <Outlet />
        </SiteLayout>
    );
}