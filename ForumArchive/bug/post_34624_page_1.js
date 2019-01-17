[{"Owner":"pichou","Date":"2017-12-18T00:20:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey everyone_co__lt_br /_gt__lt_br /_gt_\n\tI have something weird happening with the game I develop. See in this test page _dd_ _lt_a href_eq__qt_http_dd_//test.wazana.io/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//test.wazana.io/_lt_/a_gt_ ( it is a special preview for you! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ )_lt_br /_gt__lt_br /_gt_\n\tThe materials of the units and buildings are flashing. I observed this behavior only on chrome (working normal on IE_co_ Edge and Mozilla) and not on all computers I tested (maybe there is a problem with a specific version of chrome)._lt_br /_gt_\n\tI use BABYLON.MultiMaterial on units and buildings because they always have 2 colors so one material for each color. But when it flashes on Chrome_co_ this is either one color or the other on the entire mesh._lt_br /_gt__lt_br /_gt_\n\tI put a video attached which show the bug in case you don_t_t see it on the test page. (weird video format but playable with VLC)_lt_br /_gt__lt_br /_gt_\n\tBye_co_ Pichou\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_16300_qt_ data-fileid_eq__qt_16300_qt_ rel_eq__qt__qt__gt_chromematerialbug.webm_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-18T19:23:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is a known bug of Chrome 63_dd_ _lt_a href_eq__qt_https_dd_//bugs.chromium.org/p/chromium/issues/detail?id_eq_792966_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//bugs.chromium.org/p/chromium/issues/detail?id_eq_792966_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOfficial bjs 3.1 added a fix for it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-12-18T20:59:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi deltakosh_co__lt_br /_gt__lt_br /_gt_\n\tI already use the 3.1 version! I tried with the 3.2 and it did stop the bug. Although I have this error in my console now _dd_ _lt_br /_gt_\n\t```babylon.custom.js_dd_6 WebGL_dd_ INVALID_OPERATION_dd_ uniform1i_dd_ location not for current program```_lt_br /_gt__lt_br /_gt_\n\tIs it safe to use the 3.2 preview? I haven_t_t notice any bug for now._lt_br /_gt__lt_br /_gt_\n\tThanks pichou\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-18T22:15:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt is safe _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-19T14:30:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen I first saw this thread title_co_  I thought... _qt_We have chromeMaterial?  Cool!_qt_  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tChromeMaterial might be more handy to use... than reflectionTextures or _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1IZ4X0_qt_ rel_eq__qt_external nofollow_qt__gt_shaders stolen from the CYOS app_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ you guys speak-of a DIFFERENT type-of chrome material.  heh.  ohhhhh_co_ I understand NOW.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(This type of comedy is called _qt_low-hanging fruit_qt_.  It_t_s when Wingnut attempts to make _lt_strong_gt_real_lt_/strong_gt_ comedy... from something that is only mildly-amusing.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-12-19T23:03:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBut this is an idea! If someone plan to make a _qt_need for speed_qt_ game with babylon_co_ he will definitely need a chrome material for the cars tuning! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tAnd that would be cool to have a chrome map ground in wazana too! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]