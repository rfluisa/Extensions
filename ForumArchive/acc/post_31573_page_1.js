[{"Owner":"Borjan","Date":"2017-07-11T16:17:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_margin_dd_8px 0px 0px_sm__qt__gt_\n\t_lt_font size_eq__qt_3_qt__gt__lt_font color_eq__qt_#000000_qt__gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt__lt_font face_eq__qt_Calibri_qt__gt_I_lt_/font_gt__lt_/span_gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt_’_lt_/span_gt__lt_/font_gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt__lt_font face_eq__qt_Calibri_qt__gt__lt_font color_eq__qt_#000000_qt__gt_m investigating possibilities of porting the graphical part of an OpenGL desktop application to BABYLON.JS. The basic displaying went easy but (for me) the difficult part to create meshes that are 2D forms in a 3D space (please have a look into this 10 seconds video_dd_ _lt_/font_gt__lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_gFqANSbdtnE_qt_ rel_eq__qt_external nofollow_qt__gt__lt_u_gt__lt_font color_eq__qt_#0563c1_qt__gt_https_dd_//www.youtube.com/watch?v_eq_gFqANSbdtnE_lt_/font_gt__lt_/u_gt__lt_/a_gt__lt_/font_gt__lt_font color_eq__qt_#000000_qt_ face_eq__qt_Calibri_qt__gt_). Basically_co_ the rectangles are always facing the camera_co_ but in the same time are rotating and resizing with the entire scene. What would be the right (and hopefully the easiest) _lt_/font_gt__lt_/span_gt__lt_/font_gt__lt_font face_eq__qt_Calibri_qt__gt_way _lt_/font_gt__lt_font size_eq__qt_3_qt__gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt__lt_font color_eq__qt_#000000_qt_ face_eq__qt_Calibri_qt__gt_to make that working? _lt_/font_gt__lt_/span_gt__lt_/font_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_font color_eq__qt_#000000_qt__gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm_font-family_dd_Calibri_co_ sans-serif_sm_font-size_dd_11pt_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt_Additionally_co_ I would like to display _lt_/span_gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm_font-size_dd_11pt_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt_“_lt_/span_gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm_font-family_dd_Calibri_co_ sans-serif_sm_font-size_dd_11pt_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt_tool tips_lt_/span_gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm_font-size_dd_11pt_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt_”_lt_/span_gt__lt_/font_gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm_font-family_dd_Calibri_co_ sans-serif_sm_font-size_dd_11pt_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt__lt_font color_eq__qt_#000000_qt__gt_ (mesh names) on selected meshes (and when the mouse pointer hovers over a mesh). That part I could easily program myself (except for hovering)_co_ but only by using the 3.0 pre-release (see playground _lt_/font_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B_qt_ rel_eq__qt_external nofollow_qt__gt__lt_u_gt__lt_font color_eq__qt_#0563c1_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B_lt_/font_gt__lt_/u_gt__lt_/a_gt__lt_font color_eq__qt_#000000_qt__gt_). I_lt_/font_gt__lt_/span_gt__lt_font color_eq__qt_#000000_qt__gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm_font-size_dd_11pt_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt_’_lt_/span_gt__lt_span lang_eq__qt_en-us_qt_ style_eq__qt_margin_dd_0px_sm_font-family_dd_Calibri_co_ sans-serif_sm_font-size_dd_11pt_sm__qt_ xml_dd_lang_eq__qt_en-us_qt__gt_ve copied that solution from the GUI playground and it works just fine. Am I using this functionality properly?_lt_/span_gt__lt_/font_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-11T17:28:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_181382_qt_ data-ipsquote-contentid_eq__qt_31573_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1499789866_qt_ data-ipsquote-userid_eq__qt_27447_qt_ data-ipsquote-username_eq__qt_Borjan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Borjan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t(except for hovering)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tCheck out _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_actions_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_actions_lt_/a_gt_ and triggers which deal with whether pointer is over a mesh or not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor GUI hovering check out _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XCPP9Y%23121_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XCPP9Y#121_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVersion 3 will be on release very soon so do not worry about using this version.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-07-11T19:35:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_181388_qt_ data-ipsquote-contentid_eq__qt_31573_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1499794112_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCheck out _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_actions_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_actions_lt_/a_gt_ and triggers which deal with whether pointer is over a mesh or not.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tFor GUI hovering check out _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XCPP9Y%23121_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XCPP9Y#121_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tVersion 3 will be on release very soon so do not worry about using this version.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks John for for your input. However_co_ the hovering is not really of a mayor concern and_co_ moreover_co_ I do not need to use GUI except for the _qt_tool tips_qt_. Even that I would prefer to solve without involving yet another API set (a separate js library)_co_ but_co_ if it is the way I have to do it_co_ I_t_ll do it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy major concern is how to show rectangles (like in the YouTube video) instead of spheres in my visualization Check _lt_font color_eq__qt_#000000_qt__gt__lt_span_gt_ _lt_/span_gt__lt_/font_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_#3c6994_sm__qt__gt__lt_u_gt__lt_font color_eq__qt_#0563c1_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B_lt_/font_gt__lt_/u_gt__lt_/a_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe red and white spheres need to be replaced with red rectangles and blue oval shapes respectively (as used in the _lt_font color_eq__qt_#000000_qt__gt_video_dd__lt_span_gt_ _lt_/span_gt__lt_/font_gt__lt_u style_eq__qt_color_dd_rgb(60_co_105_co_148)_sm__qt__gt__lt_font color_eq__qt_#0563c1_qt__gt__lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_gFqANSbdtnE_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_#3c6994_sm__qt__gt_https_dd_//www.youtube.com/watch?v_eq_gFqANSbdtnE_lt_/a_gt_)_lt_/font_gt__lt_/u_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-11T23:14:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPlane with billboardmode _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B#1_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-07-12T15:01:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_181426_qt_ data-ipsquote-contentid_eq__qt_31573_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1499814854_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tPlane with billboardmode _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B#1_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks John_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thowever_co_ your example does not work. Everything rotates as without the billboard mode_co_ looks like something has to be done in addition.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve heard of it for the first time and checked other entries in this forum. Have a look into this_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/28611-billboard-mode-solved/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/28611-billboard-mode-solved/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve extracted a piece of it and it behaves as it should be (if I understand well what the _qt_billboard mode_qt_ means)_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#QNG6Y1%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#QNG6Y1#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease comment!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-12T16:49:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFirst of all my apologies as I made a mistake billboardMode should have a capital M (line 90) however even spelling it correctly would not give the correct results. It appears that billBoardMode does not work with instances without applying it to the instance _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs an alternative you could use clone _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is also the first time I have played with billboardMode. I had read about it in the forum and thought it might help you. My attempt at a solution fell down a bit as it was late and I didn_t_t check it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found the error by stripping out parts of your code bit at a time until the problem lay in a small section of code and so focusing on where the issue might be. A useful method for all of us.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-07-12T16:55:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_181501_qt_ data-ipsquote-contentid_eq__qt_31573_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1499878189_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFirst of all my apologies as I made a mistake billboardMode should have a capital M (line 90) however even spelling it correctly would not give the correct results. It appears that billBoardMode does not work with instances without applying it to the instance _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B#5_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAs an alternative you could use clone _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#RBP60B#4_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis is also the first time I have played with billboardMode. I had read about it in the forum and thought it might help you. My attempt at a solution fell down a bit as it was late and I didn_t_t check it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI found the error by stripping out parts of your code bit at a time until the problem lay in a small section of code and so focusing on where the issue might be. A useful method for all of us.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you very much for your effort! Just one performance question. Is there any difference between using instances and using clones?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-12T17:01:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf all the meshes have same geometry and material use instances.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf all the meshes have same geometry but different materials use clones.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-07-12T17:03:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_181505_qt_ data-ipsquote-contentid_eq__qt_31573_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1499878890_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIf all the meshes have same geometry and material use instances.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf all the meshes have same geometry but different materials use clones.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks a lot again!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]