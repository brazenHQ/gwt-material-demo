$wnd.gwtmaterialdemo.runAsyncCallback4("function MaterialMenuBar(){\n  MaterialWidget_0.call(this, $createElement($doc, 'div'));\n  $setClassName(this.element, 'menu-bar');\n}\n\ndefineClass(1550, 22, $intern_57, MaterialMenuBar);\nvar Lgwt_material_design_addins_client_ui_MaterialMenuBar_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialMenuBar', 1550);\nfunction $setIconSize_0(this$static, size_0){\n  $setIconSize_1(this$static.icon_0, size_0);\n}\n\nfunction MenuBarPresenter(eventBus, view, proxy){\n  $clinit_MenuBarPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(615, 55, $intern_50, MenuBarPresenter);\n_.onReveal = function onReveal_6(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Menu Bar', 'Menu bar is a component that bring a good UI UX navigation for Desktop or tablet interface. This component provides a multi dropdown heirarchy best suit for larger applications.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_menubar_MenuBarPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.menubar', 'MenuBarPresenter', 615);\nfunction MenuBarView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_4(new MenuBarView_BinderImpl$Widgets));\n}\n\ndefineClass(789, 58, $intern_51, MenuBarView);\nvar Lgwt_material_design_demo_client_application_addins_menubar_MenuBarView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.menubar', 'MenuBarView', 789);\nfunction MenuBarView_BinderImpl(){\n}\n\ndefineClass(1020, 1, {}, MenuBarView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_menubar_MenuBarView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.menubar', 'MenuBarView_BinderImpl', 1020);\nfunction $build_f_HTMLPanel1_4(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialCard3, f_MaterialRow4, f_MaterialColumn5, f_MaterialIcon6, f_MaterialColumn7, f_MaterialLabel8, f_MaterialMenuBar9, f_MaterialRow47, f_MaterialPanel48, f_MaterialLabel49, f_MaterialLabel50, f_MaterialLabel51, f_MaterialLabel52, f_MaterialLink10, f_MaterialLink11, f_MaterialLink12, f_MaterialLink13, f_MaterialDropDown14, f_MaterialLink15, f_MaterialLink16, f_MaterialDropDown17, f_MaterialLink18, f_MaterialLink19, f_MaterialLink20, f_MaterialLink21, f_MaterialLink22, f_MaterialLink23, f_MaterialLink24, f_MaterialLabel25, f_MaterialDropDown26, f_MaterialLink27, f_MaterialLabel28, f_MaterialLink29, f_MaterialLabel30, f_MaterialLink31, f_MaterialLabel32, f_MaterialLink33, f_MaterialLabel34, f_MaterialLink35, f_MaterialLabel36, f_MaterialLink37, f_MaterialLabel38, f_MaterialDropDown39, f_MaterialCheckBox40, f_MaterialCheckBox41, f_MaterialCheckBox42, f_MaterialCheckBox43, f_MaterialCheckBox44, f_MaterialCheckBox45, f_MaterialCheckBox46;\n  f_HTMLPanel1 = new HTMLPanel($html1_2(this$static.domId0, this$static.domId1).html);\n  __attachRecord__ = attachToDom(f_HTMLPanel1.element);\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML(f_MaterialTitle2.header.element, 'Introduction') , $setText_9(f_MaterialTitle2.paragraph, 'Nested dropdowns are good for Desktop/Tablets.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialCard3 = new MaterialCard , $add_12(f_MaterialCard3, (f_MaterialRow4 = new MaterialRow , $add_12(f_MaterialRow4, (f_MaterialColumn5 = new MaterialColumn , $add_12(f_MaterialColumn5, (f_MaterialIcon6 = new MaterialIcon , $setOpacity(f_MaterialIcon6.element.style, 0.8) , $setTextColor_0(f_MaterialIcon6.colorsMixin, 'white') , $setIconType_3(f_MaterialIcon6, ($clinit_IconType() , CHAT)) , f_MaterialIcon6)) , $setPropertyImpl(f_MaterialColumn5.element.style, 'height', '100%') , $setBackgroundColor_0((!f_MaterialColumn5.colorsMixin_0 && (f_MaterialColumn5.colorsMixin_0 = new ColorsMixin(f_MaterialColumn5)) , f_MaterialColumn5.colorsMixin_0), 'blue') , $setGrid((!f_MaterialColumn5.gridMixin_0 && (f_MaterialColumn5.gridMixin_0 = new GridMixin(f_MaterialColumn5)) , f_MaterialColumn5.gridMixin_0), 'l2') , $setTextAlign(f_MaterialColumn5, ($clinit_TextAlign() , CENTER_4)) , f_MaterialColumn5.element.style['padding'] = ($clinit_Style$Unit() , '40.0px') , f_MaterialColumn5)) , $add_12(f_MaterialRow4, (f_MaterialColumn7 = new MaterialColumn , $add_12(f_MaterialColumn7, (f_MaterialLabel8 = new MaterialLabel , $setInnerHTML(f_MaterialLabel8.element, 'Untitled Document') , $setFontSize_0(f_MaterialLabel8.fontSizeMixin, '2em') , f_MaterialLabel8.element.style['padding'] = '12.0px' , f_MaterialLabel8)) , $add_12(f_MaterialColumn7, (f_MaterialMenuBar9 = new MaterialMenuBar , $add_12(f_MaterialMenuBar9, (f_MaterialLink10 = new MaterialLink , f_MaterialLink10.span_1.setText('File') , $add_12(f_MaterialLink10, f_MaterialLink10.span_1) , $setTextColor_0((!f_MaterialLink10.colorsMixin_0 && (f_MaterialLink10.colorsMixin_0 = new ColorsMixin(f_MaterialLink10)) , f_MaterialLink10.colorsMixin_0), 'black') , $setActivates(f_MaterialLink10, 'dp-file') , $setWaves(f_MaterialLink10, ($clinit_WavesType() , DEFAULT_7)) , f_MaterialLink10.element.style['padding'] = '12.0px' , f_MaterialLink10)) , $add_12(f_MaterialMenuBar9, (f_MaterialLink11 = new MaterialLink , f_MaterialLink11.span_1.setText('Edit') , $add_12(f_MaterialLink11, f_MaterialLink11.span_1) , $setTextColor_0((!f_MaterialLink11.colorsMixin_0 && (f_MaterialLink11.colorsMixin_0 = new ColorsMixin(f_MaterialLink11)) , f_MaterialLink11.colorsMixin_0), 'black') , $setActivates(f_MaterialLink11, 'dp-edit') , $setWaves(f_MaterialLink11, DEFAULT_7) , f_MaterialLink11.element.style['padding'] = '12.0px' , f_MaterialLink11)) , $add_12(f_MaterialMenuBar9, (f_MaterialLink12 = new MaterialLink , f_MaterialLink12.span_1.setText('View') , $add_12(f_MaterialLink12, f_MaterialLink12.span_1) , $setTextColor_0((!f_MaterialLink12.colorsMixin_0 && (f_MaterialLink12.colorsMixin_0 = new ColorsMixin(f_MaterialLink12)) , f_MaterialLink12.colorsMixin_0), 'black') , $setActivates(f_MaterialLink12, 'dp-view') , $setWaves(f_MaterialLink12, DEFAULT_7) , f_MaterialLink12.element.style['padding'] = '12.0px' , f_MaterialLink12)) , $add_12(f_MaterialMenuBar9, (f_MaterialLink13 = new MaterialLink , f_MaterialLink13.span_1.setText('Format') , $add_12(f_MaterialLink13, f_MaterialLink13.span_1) , $setTextColor_0((!f_MaterialLink13.colorsMixin_0 && (f_MaterialLink13.colorsMixin_0 = new ColorsMixin(f_MaterialLink13)) , f_MaterialLink13.colorsMixin_0), 'black') , $setActivates(f_MaterialLink13, 'dp-format') , $setWaves(f_MaterialLink13, DEFAULT_7) , f_MaterialLink13.element.style['padding'] = '12.0px' , f_MaterialLink13)) , $add_12(f_MaterialMenuBar9, (f_MaterialDropDown14 = new MaterialDropDown('dp-file') , $add_24(f_MaterialDropDown14, (f_MaterialLink15 = new MaterialLink , f_MaterialLink15.span_1.setText('Share...') , $add_12(f_MaterialLink15, f_MaterialLink15.span_1) , $setTextColor_0((!f_MaterialLink15.colorsMixin_0 && (f_MaterialLink15.colorsMixin_0 = new ColorsMixin(f_MaterialLink15)) , f_MaterialLink15.colorsMixin_0), 'black') , (!f_MaterialLink15.separatorMixin && (f_MaterialLink15.separatorMixin = new SeparatorMixin(f_MaterialLink15)) , f_MaterialLink15.separatorMixin).uiObject.element.style['borderBottom'] = '1px solid #e9e9e9' , f_MaterialLink15)) , $add_24(f_MaterialDropDown14, (f_MaterialLink16 = new MaterialLink , $add_12(f_MaterialLink16, (f_MaterialDropDown17 = new MaterialDropDown('dp-new') , $add_24(f_MaterialDropDown17, (f_MaterialLink18 = new MaterialLink , f_MaterialLink18.span_1.setText('Document') , $add_12(f_MaterialLink18, f_MaterialLink18.span_1) , $setTextColor_0((!f_MaterialLink18.colorsMixin_0 && (f_MaterialLink18.colorsMixin_0 = new ColorsMixin(f_MaterialLink18)) , f_MaterialLink18.colorsMixin_0), 'black') , f_MaterialLink18)) , $add_24(f_MaterialDropDown17, (f_MaterialLink19 = new MaterialLink , f_MaterialLink19.span_1.setText('Presentation') , $add_12(f_MaterialLink19, f_MaterialLink19.span_1) , $setTextColor_0((!f_MaterialLink19.colorsMixin_0 && (f_MaterialLink19.colorsMixin_0 = new ColorsMixin(f_MaterialLink19)) , f_MaterialLink19.colorsMixin_0), 'black') , f_MaterialLink19)) , $add_24(f_MaterialDropDown17, (f_MaterialLink20 = new MaterialLink , f_MaterialLink20.span_1.setText('Form') , $add_12(f_MaterialLink20, f_MaterialLink20.span_1) , $setTextColor_0((!f_MaterialLink20.colorsMixin_0 && (f_MaterialLink20.colorsMixin_0 = new ColorsMixin(f_MaterialLink20)) , f_MaterialLink20.colorsMixin_0), 'black') , f_MaterialLink20)) , $add_24(f_MaterialDropDown17, (f_MaterialLink21 = new MaterialLink , f_MaterialLink21.span_1.setText('Drawing') , $add_12(f_MaterialLink21, f_MaterialLink21.span_1) , $setTextColor_0((!f_MaterialLink21.colorsMixin_0 && (f_MaterialLink21.colorsMixin_0 = new ColorsMixin(f_MaterialLink21)) , f_MaterialLink21.colorsMixin_0), 'black') , f_MaterialLink21)) , f_MaterialDropDown17.belowOrigin = true , f_MaterialDropDown17.hover = true , f_MaterialDropDown17)) , $setIconPosition(f_MaterialLink16, ($clinit_IconPosition() , RIGHT_5)) , f_MaterialLink16.span_1.setText('New') , $add_12(f_MaterialLink16, f_MaterialLink16.span_1) , $setTextColor_0((!f_MaterialLink16.colorsMixin_0 && (f_MaterialLink16.colorsMixin_0 = new ColorsMixin(f_MaterialLink16)) , f_MaterialLink16.colorsMixin_0), 'black') , $setIconSize_0(f_MaterialLink16, ($clinit_IconSize() , TINY)) , $setActivates(f_MaterialLink16, 'dp-new') , $setIconType(f_MaterialLink16, PLAY_ARROW) , f_MaterialLink16)) , $add_24(f_MaterialDropDown14, (f_MaterialLink22 = new MaterialLink , f_MaterialLink22.span_1.setText('Open...') , $add_12(f_MaterialLink22, f_MaterialLink22.span_1) , $setTextColor_0((!f_MaterialLink22.colorsMixin_0 && (f_MaterialLink22.colorsMixin_0 = new ColorsMixin(f_MaterialLink22)) , f_MaterialLink22.colorsMixin_0), 'black') , f_MaterialLink22)) , $add_24(f_MaterialDropDown14, (f_MaterialLink23 = new MaterialLink , $setEnabled_1((!f_MaterialLink23.enabledMixin && (f_MaterialLink23.enabledMixin = new EnabledMixin(f_MaterialLink23)) , f_MaterialLink23.enabledMixin)) , f_MaterialLink23.span_1.setText('Rename') , $add_12(f_MaterialLink23, f_MaterialLink23.span_1) , $setTextColor_0((!f_MaterialLink23.colorsMixin_0 && (f_MaterialLink23.colorsMixin_0 = new ColorsMixin(f_MaterialLink23)) , f_MaterialLink23.colorsMixin_0), 'black') , (!f_MaterialLink23.separatorMixin && (f_MaterialLink23.separatorMixin = new SeparatorMixin(f_MaterialLink23)) , f_MaterialLink23.separatorMixin).uiObject.element.style['borderBottom'] = '1px solid #e9e9e9' , f_MaterialLink23)) , $add_24(f_MaterialDropDown14, (f_MaterialLink24 = new MaterialLink , $add_12(f_MaterialLink24, (f_MaterialLabel25 = new MaterialLabel , $setInnerHTML(f_MaterialLabel25.element, 'Ctrl P') , $setFloat(f_MaterialLabel25, ($clinit_Style$Float() , RIGHT)) , f_MaterialLabel25)) , f_MaterialLink24.span_1.setText('Print') , $add_12(f_MaterialLink24, f_MaterialLink24.span_1) , $setTextColor_0((!f_MaterialLink24.colorsMixin_0 && (f_MaterialLink24.colorsMixin_0 = new ColorsMixin(f_MaterialLink24)) , f_MaterialLink24.colorsMixin_0), 'black') , f_MaterialLink24)) , f_MaterialDropDown14.belowOrigin = true , f_MaterialDropDown14)) , $add_12(f_MaterialMenuBar9, (f_MaterialDropDown26 = new MaterialDropDown('dp-edit') , $add_24(f_MaterialDropDown26, (f_MaterialLink27 = new MaterialLink , $add_12(f_MaterialLink27, (f_MaterialLabel28 = new MaterialLabel , $setInnerHTML(f_MaterialLabel28.element, 'Ctrl + Z') , $setFloat(f_MaterialLabel28, RIGHT) , f_MaterialLabel28)) , f_MaterialLink27.span_1.setText('Undo') , $add_12(f_MaterialLink27, f_MaterialLink27.span_1) , $setTextColor_0((!f_MaterialLink27.colorsMixin_0 && (f_MaterialLink27.colorsMixin_0 = new ColorsMixin(f_MaterialLink27)) , f_MaterialLink27.colorsMixin_0), 'black') , $setIconType(f_MaterialLink27, UNDO) , f_MaterialLink27)) , $add_24(f_MaterialDropDown26, (f_MaterialLink29 = new MaterialLink , $add_12(f_MaterialLink29, (f_MaterialLabel30 = new MaterialLabel , $setInnerHTML(f_MaterialLabel30.element, 'Ctrl + Y') , $setFloat(f_MaterialLabel30, RIGHT) , f_MaterialLabel30)) , f_MaterialLink29.span_1.setText('Redo') , $add_12(f_MaterialLink29, f_MaterialLink29.span_1) , $setTextColor_0((!f_MaterialLink29.colorsMixin_0 && (f_MaterialLink29.colorsMixin_0 = new ColorsMixin(f_MaterialLink29)) , f_MaterialLink29.colorsMixin_0), 'black') , $setIconType(f_MaterialLink29, REDO) , f_MaterialLink29)) , $add_24(f_MaterialDropDown26, (f_MaterialLink31 = new MaterialLink , $add_12(f_MaterialLink31, (f_MaterialLabel32 = new MaterialLabel , $setInnerHTML(f_MaterialLabel32.element, 'Ctrl + X') , $setFloat(f_MaterialLabel32, RIGHT) , f_MaterialLabel32)) , f_MaterialLink31.span_1.setText('Cut') , $add_12(f_MaterialLink31, f_MaterialLink31.span_1) , $setTextColor_0((!f_MaterialLink31.colorsMixin_0 && (f_MaterialLink31.colorsMixin_0 = new ColorsMixin(f_MaterialLink31)) , f_MaterialLink31.colorsMixin_0), 'black') , $setIconType(f_MaterialLink31, CONTENT_CUT) , f_MaterialLink31)) , $add_24(f_MaterialDropDown26, (f_MaterialLink33 = new MaterialLink , $add_12(f_MaterialLink33, (f_MaterialLabel34 = new MaterialLabel , $setInnerHTML(f_MaterialLabel34.element, 'Ctrl + C') , $setFloat(f_MaterialLabel34, RIGHT) , f_MaterialLabel34)) , f_MaterialLink33.span_1.setText('Copy') , $add_12(f_MaterialLink33, f_MaterialLink33.span_1) , $setTextColor_0((!f_MaterialLink33.colorsMixin_0 && (f_MaterialLink33.colorsMixin_0 = new ColorsMixin(f_MaterialLink33)) , f_MaterialLink33.colorsMixin_0), 'black') , $setIconType(f_MaterialLink33, CONTENT_COPY) , f_MaterialLink33)) , $add_24(f_MaterialDropDown26, (f_MaterialLink35 = new MaterialLink , $add_12(f_MaterialLink35, (f_MaterialLabel36 = new MaterialLabel , $setInnerHTML(f_MaterialLabel36.element, 'Ctrl + V') , $setFloat(f_MaterialLabel36, RIGHT) , f_MaterialLabel36)) , f_MaterialLink35.span_1.setText('Paste') , $add_12(f_MaterialLink35, f_MaterialLink35.span_1) , $setTextColor_0((!f_MaterialLink35.colorsMixin_0 && (f_MaterialLink35.colorsMixin_0 = new ColorsMixin(f_MaterialLink35)) , f_MaterialLink35.colorsMixin_0), 'black') , (!f_MaterialLink35.separatorMixin && (f_MaterialLink35.separatorMixin = new SeparatorMixin(f_MaterialLink35)) , f_MaterialLink35.separatorMixin).uiObject.element.style['borderBottom'] = '1px solid #e9e9e9' , $setIconType(f_MaterialLink35, CONTENT_PASTE) , f_MaterialLink35)) , $add_24(f_MaterialDropDown26, (f_MaterialLink37 = new MaterialLink , $add_12(f_MaterialLink37, (f_MaterialLabel38 = new MaterialLabel , $setInnerHTML(f_MaterialLabel38.element, 'Ctrl + Shift + H') , $setFloat(f_MaterialLabel38, RIGHT) , f_MaterialLabel38)) , f_MaterialLink37.span_1.setText('Find and Replace...') , $add_12(f_MaterialLink37, f_MaterialLink37.span_1) , $setTextColor_0((!f_MaterialLink37.colorsMixin_0 && (f_MaterialLink37.colorsMixin_0 = new ColorsMixin(f_MaterialLink37)) , f_MaterialLink37.colorsMixin_0), 'black') , $setIconType(f_MaterialLink37, CONTENT_PASTE) , f_MaterialLink37)) , f_MaterialDropDown26.belowOrigin = true , f_MaterialDropDown26)) , $add_12(f_MaterialMenuBar9, (f_MaterialDropDown39 = new MaterialDropDown('dp-view') , $add_24(f_MaterialDropDown39, (f_MaterialCheckBox40 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox40.directionalTextHelper, 'Print Layout') , f_MaterialCheckBox40)) , $add_24(f_MaterialDropDown39, (f_MaterialCheckBox41 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox41.directionalTextHelper, 'Mode') , f_MaterialCheckBox41)) , $add_24(f_MaterialDropDown39, (f_MaterialCheckBox42 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox42.directionalTextHelper, 'Show ruler') , f_MaterialCheckBox42)) , $add_24(f_MaterialDropDown39, (f_MaterialCheckBox43 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox43.directionalTextHelper, 'Show equation toolbar') , f_MaterialCheckBox43)) , $add_24(f_MaterialDropDown39, (f_MaterialCheckBox44 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox44.directionalTextHelper, 'Show spelling suggestions') , f_MaterialCheckBox44)) , $add_24(f_MaterialDropDown39, (f_MaterialCheckBox45 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox45.directionalTextHelper, 'Compact controls') , f_MaterialCheckBox45)) , $add_24(f_MaterialDropDown39, (f_MaterialCheckBox46 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox46.directionalTextHelper, 'Fullscreen') , f_MaterialCheckBox46)) , f_MaterialDropDown39.belowOrigin = true , f_MaterialDropDown39)) , f_MaterialMenuBar9)) , $setGrid((!f_MaterialColumn7.gridMixin_0 && (f_MaterialColumn7.gridMixin_0 = new GridMixin(f_MaterialColumn7)) , f_MaterialColumn7.gridMixin_0), 'l10') , f_MaterialColumn7)) , $setBackgroundColor_0((!f_MaterialRow4.colorsMixin_0 && (f_MaterialRow4.colorsMixin_0 = new ColorsMixin(f_MaterialRow4)) , f_MaterialRow4.colorsMixin_0), 'white') , f_MaterialRow4.element.style['margin'] = '0.0px' , f_MaterialRow4)) , $add_12(f_MaterialCard3, (f_MaterialRow47 = new MaterialRow , $add_12(f_MaterialRow47, (f_MaterialPanel48 = new MaterialPanel , $add_12(f_MaterialPanel48, (f_MaterialLabel49 = new MaterialLabel , f_MaterialLabel49.element.style['marginBottom'] = '20.0px' , $setInnerHTML(f_MaterialLabel49.element, 'Untitled Document') , f_MaterialLabel49.element.style['marginTop'] = '20.0px' , $setTextAlign(f_MaterialLabel49, CENTER_4) , $setFontSize_0(f_MaterialLabel49.fontSizeMixin, '1.5em') , f_MaterialLabel49)) , $add_12(f_MaterialPanel48, (f_MaterialLabel50 = new MaterialLabel , f_MaterialLabel50.element.style['marginBottom'] = '40.0px' , $setInnerHTML(f_MaterialLabel50.element, 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.') , f_MaterialLabel50)) , $add_12(f_MaterialPanel48, (f_MaterialLabel51 = new MaterialLabel , f_MaterialLabel51.element.style['marginBottom'] = '40.0px' , $setInnerHTML(f_MaterialLabel51.element, 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.') , f_MaterialLabel51)) , $add_12(f_MaterialPanel48, (f_MaterialLabel52 = new MaterialLabel , f_MaterialLabel52.element.style['marginBottom'] = '40.0px' , $setInnerHTML(f_MaterialLabel52.element, 'Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.') , f_MaterialLabel52)) , $setBackgroundColor_0((!f_MaterialPanel48.colorsMixin_0 && (f_MaterialPanel48.colorsMixin_0 = new ColorsMixin(f_MaterialPanel48)) , f_MaterialPanel48.colorsMixin_0), 'white') , $setShadow((!f_MaterialPanel48.shadowMixin && (f_MaterialPanel48.shadowMixin = new ShadowMixin(f_MaterialPanel48)) , f_MaterialPanel48.shadowMixin), 1) , $setGrid((!f_MaterialPanel48.gridMixin_0 && (f_MaterialPanel48.gridMixin_0 = new GridMixin(f_MaterialPanel48)) , f_MaterialPanel48.gridMixin_0), 'l8') , $setOn((!f_MaterialPanel48.hoverableMixin && (f_MaterialPanel48.hoverableMixin = new ToggleStyleMixin(f_MaterialPanel48, 'hoverable')) , f_MaterialPanel48.hoverableMixin), true) , $setOffset((!f_MaterialPanel48.gridMixin_0 && (f_MaterialPanel48.gridMixin_0 = new GridMixin(f_MaterialPanel48)) , f_MaterialPanel48.gridMixin_0), 'l2') , f_MaterialPanel48.element.style['padding'] = '20.0px' , f_MaterialPanel48)) , f_MaterialRow47.element.style['padding'] = '20.0px' , f_MaterialRow47)) , f_MaterialCard3.element.style['marginBottom'] = '10.0px' , undefined , $setBackgroundColor_0((!f_MaterialCard3.colorsMixin_0 && (f_MaterialCard3.colorsMixin_0 = new ColorsMixin(f_MaterialCard3)) , f_MaterialCard3.colorsMixin_0), 'grey lighten-3') , f_MaterialCard3), $get_0(this$static.domId1Element));\n  return f_HTMLPanel1;\n}\n\nfunction MenuBarView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n}\n\ndefineClass(1021, 1, {}, MenuBarView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_menubar_MenuBarView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.menubar', 'MenuBarView_BinderImpl/Widgets', 1021);\nfunction $html1_2(arg0, arg1){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarPresenter$_annotation$$none$$) {\n    result = new MenuBarPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarView$_annotation$$none$$) {\n    result = new MenuBarView(new MenuBarView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarView$_annotation$$none$$;\n}\n\ndefineClass(525, 1, $intern_75);\n_.onSuccess_0 = function onSuccess_3(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$menubar$MenuBarPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(4);\n\n//# sourceURL=gwtmaterialdemo-4.js\n")
