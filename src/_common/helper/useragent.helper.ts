import { user_agent } from './config/user_agents';
const { platforms, browsers, mobiles, robots } = user_agent;
export function check_mobile(agent: string): boolean {
    for (const [key, value] of Object.entries(mobiles)) {
        if (agent.toLowerCase().indexOf(key) > -1) {
            return true;
        }
    }
    return false;
}

export function check_browser(agent: string): boolean {
    for (const [key, value] of Object.entries(browsers)) {
        console.log(new RegExp(key + '.*?([0-9.]+)', 'i'));
        if (agent.match(new RegExp(key + '.*?([0-9.]+)', 'i'))) {
            return true;
        }
    }
    return false;
}

export function check_robot(agent: string): boolean {
    for (const [key, value] of Object.entries(robots)) {
        if (agent.match(new RegExp(preg_quote(key), 'i'))) {
            return true;
        }
    }
    return false;
}
export function preg_quote(str: string, delimiter = null) {
    // eslint-disable-line camelcase
    //  discuss at: https://locutus.io/php/preg_quote/
    // original by: booeyOH
    // improved by: Ates Goral (https://magnetiq.com)
    // improved by: Kevin van Zonneveld (https://kvz.io)
    // improved by: Brett Zamir (https://brett-zamir.me)
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    //   example 1: preg_quote("$40")
    //   returns 1: '\\$40'
    //   example 2: preg_quote("*RRRING* Hello?")
    //   returns 2: '\\*RRRING\\* Hello\\?'
    //   example 3: preg_quote("\\.+*?[^]$(){}=!<>|:")
    //   returns 3: '\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:'
    return (str + '').replace(
        new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'),
        '\\$&',
    );
}
