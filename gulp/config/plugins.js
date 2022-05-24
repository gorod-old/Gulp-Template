import replace from 'gulp-replace'; // search and replace
import plumber from 'gulp-plumber'; // error processing
import notify from 'gulp-notify'; // notify( hints)
import browsersync from 'browser-sync'; 
import newer from 'gulp-newer'; // check image update
import ifplugin from 'gulp-if'; 

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifplugin
}