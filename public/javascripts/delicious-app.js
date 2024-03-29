import '../sass/style.scss';

import { $, $$ } from './modules/bling';

import autocomplete from './modules/autocomplete';

import typeAhead from './modules/typeAhead';

import ajaxHeart from './modules/heart';
import makeMap from './modules/map';
import { type } from 'os';

autocomplete($('#address'), $('#lat'), $('#lng'));

typeAhead( $('.search') );

const heartForms = $$('form.heart');
heartForms.on('submit', ajaxHeart);


makeMap( $('#map') );