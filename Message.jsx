/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var React             = require('react'),
    CtxPass           = require('../ctx_pass'),
    Messages          = require('../Messages'),
    IntlMessageFormat = require('intl-messageformat'),
    ReactIntlMixin    = require('react-intl'),

    I_Message = React.createClass({

        mixins: [CtxPass, ReactIntlMixin],

        render: function() {

            this.context.locale = 'es-MX'; // todo whargarbl

            var Fmt = new IntlMessageFormat(Messages[this.context.locale][this.props.id], this.context.locale);
            return <span>{ Fmt.format( this.props.data || {} ) }</span>;

        }

    });



module.exports = I_Message;
