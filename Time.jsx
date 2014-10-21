/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var React          = require('react'),
    CtxPass        = require('../ctx_pass'),
    ReactIntlMixin = require('react-intl'),

    I_Number = React.createClass({

        mixins: [CtxPass, ReactIntlMixin],

        render: function() {
            return <span>time { this.props.value }</span>;
        }

    });



module.exports = I_Number;
