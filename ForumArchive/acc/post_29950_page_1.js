[{"Owner":"Gil","Date":"2017-04-22T16:55:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m currently doing some tests with the DynamicTexture system that could be used to add a new tutorial.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tThe final goal is to have one picture on a plane._lt_br /_gt_\n\tWhen I click on some button I will activate an animation managed by Babylon (if it_t_s possible) so I can fade in and fade out the pictures._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had a first method where I wanted to add a canvas inside the canvas but that didn_t_t work out _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#B9HGX0%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#B9HGX0#_lt_/a_gt_3\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I have one texture fading in and fading out automatically _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#B9HGX0%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#B9HGX0#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo be continued...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-24T13:31:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26371-gil/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26371_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26371-gil/_qt_ rel_eq__qt__qt__gt_@Gil_lt_/a_gt_!  Umm... is there _lt_em_gt_some reason_lt_/em_gt_ that you _lt_u_gt_must_lt_/u_gt_ use image buffers and dynamicTextures?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat-_lt_strong_gt_if_lt_/strong_gt_... you used a StandardMaterial on the plane_co_ set its .diffuseTexture (or perhaps .emissiveTexture) to a BABYLON.Texture?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ you animate _lt_em_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/basetexture#level-number_qt_ rel_eq__qt_external nofollow_qt__gt_texture.level_lt_/a_gt__lt_/em_gt_ or perhaps _lt_em_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/material#alpha-number_qt_ rel_eq__qt_external nofollow_qt__gt_material.alpha_lt_/a_gt__lt_/em_gt_.  Keep reducing texture.level or material.alpha... until it hits 0.  Then change material.diffuseTexture to a new BABYLON.Texture (possibly setting its .level _eq_ 0 immediately)_co_ and then start animating the level or alpha... increasing it back to 1.0. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIF using texture.level_co_ it might be wise to set a material.diffuseColor_co_ too_co_ so plane has color when texture.level is low. (fade-down-to-black_co_ fade-up-from-black_co_ et al.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould this work?  Or_co_ do you need to (later) do _lt_a href_eq__qt_https_dd_//www.w3.org/TR/2dcontext/_qt_ rel_eq__qt_external nofollow_qt__gt_Context2D_lt_/a_gt_ painting or text... upon the images?  That would be a reason to use image buffers and dynamicTexture_co_ I guess.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust thinkin_t_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Not sure I have any good ideas_co_ yet.  Others may comment soon_co_ now that the warm_lt_span style_eq__qt_font-size_dd_8px_sm__qt__gt_?_lt_/span_gt_ weekend is finished. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAside_dd_  Here in Michigan U.P._co_ Saturday was wonderful... sunny and 62 f.  Sunday_co_ it was partly-sunny and 34 f_co_ with light snow!  Erf!  Goofy weather.  I saw my snowblower look-at my lawnmower_co_ and shrug_co_ with a puzzled expression.  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gil","Date":"2017-04-25T17:42:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s not the best weather right now in Europe _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _co_ Rain and 10°C.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour first proposal won_t_t work for me. I need textures to blend together live. I would have loved to be able to fade directly a new texture in the diffuse slot but that doesn_t_t seem to be possible directly without the DynamicTexture._lt_br /_gt_\n\tThe textures needs to blend and to replace the old texture. It_t_s an evolution _dd_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother solution would have been to mix materials with an alpha. That would have been really cool. Then I would only need to animate the alphaColor _dd_)._lt_br /_gt_\n\tBut it seems simpler to mix a texture than a material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne thing that really bother me with my solution is that I don_t_t think I will be able to use the BABYLON Animation system_co_ or not directly at least. Maybe with an event or something..._lt_br /_gt_\n\tI_t_m going to do more tests tomorrow as I need to finish this for next week _dd_p.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit _dd_ By reading the Multi Materials in the Advanced texturing _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/advanced_texturing_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/advanced_texturing_lt_/a_gt__lt_br /_gt_\n\tIt seems that using an alpha should be possible. Maybe there is something there for me... Where I could get multiple materials on top of each other and animate the alpha._lt_br /_gt_\n\tThat would be so cool if it works like I think it could.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-25T18:45:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_ Gil.  Could a solution that uses planes... stacked atop one another_co_ and then animate plane.visibility ... possibly work for you?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1SWPNU%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1SWPNU#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is a 2-plane version_co_  but you could stack them deep_co_ if you wish.  Then_co_ essentially_co_ you_t_d build a _qt_plane layer manager_qt_ that used .visibility and pauses... to deliver a quality user experience.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI managed to code a _qt_pause_qt_ into it_co_ but it only works on misc.jpg.  orient.jpg has no pause applied.  hmm.  Bad coding by Wingnut_co_ surely.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Thoughts?  (A throwback from the old _qt_back-buffer_qt_ days.  Repeatedly _qt_feed_qt_ the back-buffer_co_ bring to front_co_ over and over.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gil","Date":"2017-04-25T18:51:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMmmmm Yes and No _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt would certainly work but I_t_m using some more complex geometry with 2 morphtarget each time._lt_br /_gt_\n\tSo right now for 1 mesh I have 2 morphtarget and I will add 2 diffuse and maybe 2 normal maps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if I duplicate the meshes that migth mean 6 meshes in total. I would have to check if just scaling would suffise but I don_t_t think the geometry would work just with a scale.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf the multimaterial have an alphaColor and / or an alphaLevel that would be the perfect solution.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gil","Date":"2017-04-26T07:48:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooks like it won_t_t be possible as we can_t_t assign multiple materials to the same verticies / faces.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just found another post \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/15241-multiple-textures-on-the-same-faces-of-a-mesh/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tAnd _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ give all the possible solution. I think I will try to duplicate the mesh finally and see how that works for me. That will sure be the fastest way to get what I want.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I have more time I might just write a shader for that but I don_t_t have that luxury right now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat would have been cool to just have a plugin for DynamicTexture that would do that by itself.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-26T19:00:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMind if I butt-in some more?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDeltakosh loosely said _qt_use emissiveColor/Texture for your _lt_em_gt_extra_lt_/em_gt_ (dissolve-to/from) material channel._qt_  (_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/15241-multiple-textures-on-the-same-faces-of-a-mesh/?do_eq_findComment&amp_sm_comment_eq_86658_qt_ rel_eq__qt__qt__gt_last post in your linked topic_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ you know how THAT goes.  When you dissolve-in the emissive_co_ you also need to dim the lights.  cuzzzzz.... emissive _eq_ self-illumination.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo... I tried it.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CHCEI%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CHCEI#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSlow dissolver... very color/mesh specific (not very re-usable) code in the renderLoop.  Would work for diffuse/emissive TEXTURES too.  (with textures_co_ animate texture.level instead of forced color-changing.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut.. oh... what a lighting kludge (watch sphere to know light .intensity)_co_ and generally... a less-than-optimal situation_co_ eh?  heh. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ it_t_s one sub-meshed mesh_co_ one multi-material_co_ and we_t_re doing a dissolve (with a sledgehammer).  heh.  Such a goofy non-solve_co_ that we might as well say I am off-topic.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Nothing unusual there_co_ for Mister Wingle Dingle Wingnut.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also tried pushing lightRed and darkRed materials into subMaterials array (so 4 mats in array)... then tried slowly lowering the alpha on the green materials... hoping that the red materials would _qt_take over_qt_ (like the reds are laying beneath the greens).  Nope.  Dropping alpha on the first two materials in the array (the greens)... made the mesh go black.  It would have been nice to see the two reds in the array... _qt_take over_qt__co_ when the greens went low-alpha.  hrmph.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk guys_co_ continue-on.  Sorry for distraction.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]