[{"Owner":"Hagop","Date":"2017-02-08T09:59:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter I parent a mesh with impostor to a camera_co_ and assign position to it relative to Camera_co_ X &amp_sm_ Z axis locations work correctly_co_ but not Y-axis location. The mesh jumps up and actually the jumping depends on the value of the Y component the Cannon engine is initialized.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheckout _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1VNAYW%2384_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1VNAYW#84_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-08T17:05:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello I_t_m afraid that parenting a physics mesh to a camera is not supported. Pinging our physics lead engineeer ( _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_)_lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-02-10T22:52:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso - as DK said_co_ this is not really supported. But do you care to explain what you are trying to achieve? maybe we will find a better solution!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-02-11T04:51:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI strongly suspect you_t_ll have better luck parenting the camera to a mesh_co_ rather than the other way around.. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1VNAYW%2386_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1VNAYW#86_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-02-12T03:14:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12925-fenomas/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12925_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12925-fenomas/_qt_ rel_eq__qt__qt__gt_@fenomas_lt_/a_gt_ is correct in his approach_co_ and the best method I know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hagop","Date":"2017-02-12T06:47:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_162934_qt_ data-ipsquote-contentid_eq__qt_28298_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1486767159_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 11.02.2017 at 0_dd_52 AM_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tso - as DK said_co_ this is not really supported. But do you care to explain what you are trying to achieve? maybe we will find a better solution!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ this is what I am trying to acheive.Click a product and drag down the mouse down to add into shopping cart.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//52.183.26.98/3d/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//52.183.26.98/3d/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to  move/rotate the products smoothly with shopping cart. That_t_s why I have added parenting after dropping. As a temp solution_co_ I have removed physics after dropping_co_ but in this case products fall INTO one another\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-02-21T20:26:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI understand.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo get that you will have to play with the forces that are applied on the shopping cart. The problem with position update_co_ is that the velocity and acceleration stays 0_co_ so the physics engine thinks - ah_co_ the object didn_t_t move_co_ no reason to check for collisions. When pushing _qt_forward_qt__co_ you will need to calculate forward and apply this force (or better yet - set the cart_t_s velocity) in the right direction. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think more and more people require something like this. The only way to go is really moving to the _qt_physics_qt_ world_co_ and leaving the simple position and rotation world. This requires a different way of thinking. I would have said that I will try creating a demo for this_co_ but I won_t_t find the time soon. If you want to start a nice playground that will be the base on which we both can work_co_ I will be more than happy to look inside and comment.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]