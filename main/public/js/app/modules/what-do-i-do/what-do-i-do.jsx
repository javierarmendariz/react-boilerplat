/**
* Module with some text content (WhatDoIDo).
* @module What-Do-I-Do
* @namespace What-Do-I-Do
* @example
* // JSX
* <section id="what-do-i-do">
*     <Modal show={this.state.showModal} onHide={this.hideModal} bsSize={'lg'}>
*         <Modal.Body>
*         <img src="images/diagram-web.jpg" className="img-responsive" border="0" alt="Diagram" />
*     </Modal.Body>
*     <Modal.Footer>
*     <Button onClick={this.hideModal} className="button-deafult">Close</Button>
* </Modal.Footer>
* </Modal>
*
* <Grid>
*
*     <Row>
*         <Col xs={12} sm={12} md={12} lg={12} xl={12}>
*             <h1>Let's code!</h1>
*             <hr />
*         </Col>
*     </Row>
*
*     <Row xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2} className="section-box">
*         <p>
*             I develop single page applications over 3 layers (MVR): Models/Collections, Views and Router. With Restful APIs connections through Backbone models and jQuery Ajax calls, with the following verbs: Get, Post, Put and Delete. I have been using Underscorejs and Dustjs as Templating system. Semantic HTML and CSS pre-processors make me happy, for this reason I use HTML5 tags and Less. All my development runs through the GIT Workflow or SVN. And I include Node packages and Bower on any of my new projects.
*         </p>
*         <p>
*             In the following diagram you can see all the technologies I work with, and how I organize my job:
*         </p>
*     </Row>
*
*     <Row>
*         <Col sm={12} className="section-box">
*             <h2 className="text-center">Diagram</h2>
*             <p>
*                 <img src="images/diagram-web.jpg" onClick={this.showModal} className="img-responsive" border="0" alt="Diagram" />
*             </p>
*         </Col>
*     </Row>
* </Grid>
* </section>
*/

define([], function () {

    'use strict';

    var Modal = ReactBootstrap.Modal;
    var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;
    var Button = ReactBootstrap.Button;

    var View = React.createClass({

        getInitialState: function () {

            var initialStateValues = {
                showModal: !!this.props.component
            };

            return initialStateValues;
        },

        componentWillReceiveProps: function (nextProps) {
            this.setState({
                showModal: !!nextProps.component
            });
        },

        hideModal: function () {
            window.location = '/#/what-do-i-do';
        },

        showModal: function () {

            this.setState({
                showModal: true
            });
        },

        render: function () {

            return (
                <section id="what-do-i-do">

                    <Modal show={this.state.showModal} onHide={this.hideModal} bsSize={'lg'}>
                        <Modal.Body>
                            <img src="images/diagram-web.jpg" className="img-responsive" border="0" alt="Diagram" />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.hideModal} className="button-deafult">Close</Button>
                        </Modal.Footer>
                    </Modal>

                    <Grid>

                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <h1>Let's code!</h1>
                                <hr />
                            </Col>
                        </Row>

                        <Row className="section-box">
                            <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
                                <p>
                                    I develop single page applications over 3 layers (MVR): Models/Collections, Views and Router. With Restful APIs connections through Backbone models and jQuery Ajax calls, with the following verbs: Get, Post, Put and Delete. I have been using Underscorejs and Dustjs as Templating system. Semantic HTML and CSS pre-processors make me happy, for this reason I use HTML5 tags and Less. All my development runs through the GIT Workflow or SVN. And I include Node packages and Bower on any of my new projects.
                                </p>
                                <p>
                                    In the following diagram you can see all the technologies I work with, and how I organize my job:
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12} className="section-box">
                                <h2 className="text-center">Diagram</h2>
                                <p>
                                    <a href="/#/what-do-i-do/diagram"><img src="images/diagram-web.jpg" className="img-responsive" border="0" alt="Diagram" /></a>
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </section>
            );
        }
    });

    return View;

});
