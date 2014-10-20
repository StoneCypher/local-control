/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var React             = require('react'),
    CtxPass           = require('../ctx_pass'),
    ReactIntlMixin    = require('react-intl'),
    IntlMessageFormat = require('intl-messageformat'),

    I_Date = React.createClass({

        mixins: [CtxPass, ReactIntlMixin],

        render: function() {
            return <span>{ this.formatDate(this.props.value || new Date()) }</span>;
        }

    });



module.exports = I_Date;
