[{"Owner":"jerome","Date":"2015-05-07T18:44:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Something I don_t_t get ..._lt_/p_gt__lt_p_gt_When a mesh is created with _lt_em_gt_updatable_lt_/em_gt_ param set to true_co_ its vertex buffer may be updated afterwards._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But if it is set to _lt_em_gt_false_lt_/em_gt__co_ this means this buffer isn_t_t taken in account once the mesh is built. Yet the mesh can be rotated_co_ translated_co_ scaled so the vertex positions are changed_co_ aren_t_t they ?_lt_/p_gt__lt_p_gt_Maybe these operations don_t_t apply to the vertex buffer... don_t_t understand the magic under the hood._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well_co_ these questions are because I_t_m wondering if a _lt_em_gt_non-updatable_lt_/em_gt_ built mesh could be set then as _lt_em_gt_updatable_lt_/em_gt_ (so injected in the stack of stuffs to update) temporalily and then reset to its original status on demand._lt_/p_gt__lt_p_gt_Something like _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.shouldUpdate()_sm_mesh.resetUpdate()_sm__lt_/pre_gt__lt_p_gt_or any funny BJS term ..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-07T21:06:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_updatable means you can change the vertices._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_rotation_co_ translation and scaling change the worldMatrix that will be applied on vertices but do not change the vertices_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You cannot transform a non updatable to an updatable as this is related to the inner webgl buffer_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-08T05:28:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok I understand_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So maybe it is better my upcoming _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/?p_eq_81613_qt__gt__lt_em_gt_rebase()_lt_/em_gt__lt_/a_gt_ function rather sets values in the world matrix better than in the mesh position instead ?_lt_/p_gt__lt_p_gt_This means computing rotations what I wanted to avoid._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Mmmhh... In this case_co_ maybe I won_t_t change the world matrix and rather use the higher level BJS tools like _lt_em_gt_mesh.rotation_lt_/em_gt_ directly _lt_/p_gt__lt_p_gt_So if I use the _lt_em_gt_mesh.rotation.x_co_ y_co_ z_lt_/em_gt_ properties_co_ I need to know in what order the underlying rotation matrices are applied to the mesh _dd__lt_/p_gt__lt_p_gt_Rx * Ry * Rz ?_lt_/p_gt__lt_p_gt_Rz * Ry * Rx ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I set this _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.rotation.x _eq_ rho_sm_mesh.rotation.y _eq_ delta_sm_mesh.rotation.z _eq_ gamma_sm__lt_/pre_gt__lt_p_gt_How is it rotated under the hood ? x first ? z first ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_too bad... it was so simple to do with vector scaling and adding in the positions  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-08T18:32:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_we already have a function that change the mesh internal vertices_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.mesh.ts#L885_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.mesh.ts#L885_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For your rotation question_dd_ y-&gt_sm_x-&gt_sm_z_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-09T07:16:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thank you_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I want something different from _lt_em_gt_bake..()_lt_/em_gt_ method because _lt_em_gt_bake()_lt_/em_gt_ requires to pass a matrix_co_ so_co_ well_co_ the _lt_em_gt_HOW_lt_/em_gt_ to transform things._lt_/p_gt__lt_p_gt_My explanation about the rebase() wasn_t_t that clear _dd_ re-expressed here _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/?p_eq_81858_qt__gt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/?p_eq_81858_lt_/a_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Didn_t_t get if you were talking about the rotation order or matrix order. Sorry._lt_/p_gt__lt_p_gt_So to rephrase you answer_co_ you mean_co_ in terms of rotation matrix (R_lt_em_gt_axis_lt_/em_gt_) multiplication _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_u_gt_question #1_lt_/u_gt_ _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_rotatedCoords _eq_ Ry * Rx * Rz * localCoords_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am I right ?_lt_/p_gt__lt_p_gt_or just the inverse _dd_  rotatedCoord _eq_ Rz * Rx * Ry * localCoords ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_u_gt_question #2_lt_/u_gt_ _dd__lt_/p_gt__lt_p_gt_As it seems to be not that easy to find rotation Euler angles from just target and source positions_co_ I_t_m looking for another way (than applying rotation.x_co_ y_co_ z) to set the mesh vertices final positions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When the worldMatrix is applied to a mesh_co_ this means its local coordinates are transformed into world coordinates. These world coordinates will then be transformed into view coordinates_co_ I guess._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess also that computing the mesh world coordinates means to compute the world coordinates of each of its vertex._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Are these current vertices world coordinates for a given stored and accessible by a BJS low-level function ? Is there a data structure or an object storing them at any time ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For a given mesh_co_ do I have the mean to modify its vertices world coordinates ?_lt_/p_gt__lt_p_gt_Unless everything is computed GPU side ... arrgh_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_u_gt_question #3_lt_/u_gt_ _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In case I can_t_t achieve it from the #1 or #2 way_co_ maybe I could design something in the top of _lt_em_gt_mesh.lookAt()_lt_/em_gt_._lt_/p_gt__lt_p_gt_When using _lt_em_gt_lookAt()_co_ _lt_/em_gt_I guess the chosen axis is mesh.position-targetPoint (vector) to orientate the mesh. Am I right ?_lt_/p_gt__lt_p_gt_But what original mesh axis is then aligned to this target axis ? Z ? -Z ? something else ?_lt_/p_gt__lt_p_gt_And what rotation_co_ if any_co_ is applied then to the mesh around the target (looked at) axis ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-10T18:57:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_q1_dd_ Correct_dd_ _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_rotatedCoords _eq_ Ry * Rx * Rz * localCoords_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_q2_dd_ NO. All matrices computation are done on the GU (on the vertex shader). THis is the only way to achieve performance. Especially on JavaScript where we only have one thread (almost)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_q3_dd_ Right. Axis aligned is z --&gt_sm_ -z. no rotation around_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-10T18:58:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_More info about the matrices computation_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.ts#L437_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.ts#L437_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-11T12:38:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-14T08:36:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@DK_lt_/p_gt__lt_p_gt_back to rotation order question at property level _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if I set _lt_em_gt_mesh.rotation.x_co_ y_co_ z_lt_/em_gt_ properties_co_ the mesh will be rotated then _dd__lt_/p_gt__lt_p_gt_first _dd_ around y-axis_lt_/p_gt__lt_p_gt_then _dd_ around x-axis_lt_/p_gt__lt_p_gt_finally _dd_ around z-axis_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is this correct ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-14T14:15:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Correct_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-14T16:50:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok_co_ I_t_ll try to implement something to process some inverse rotation from 3 arbitrary oriented orthogonal vectors (my target) in space back to x_co_y_co_z world axis (the source &lt_sm__eq_&gt_sm_ localSpace)_lt_/p_gt__lt_p_gt_so unrotate first target around its z-axis to align target x-axis with xOz world plane _eq_&gt_sm_ project coordinates_co_ deduct roll angle_lt_/p_gt__lt_p_gt_then unrotate target around its x-axis to align target xOz plane to xOz world plane _eq_&gt_sm_ project coordinates_co_ deduct pitch angle_lt_/p_gt__lt_p_gt_then unrotate target around its y-axis_co_ which now the same than world y-axis to align x and z target axis onto x and z world axis _eq_&gt_sm_ project coordinates_co_ deduct yaw angle_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When saying _qt_unrotate_qt_ here_co_ I don_t_t apply anything to a mesh_co_ I just solve equations (plane equation + axis belonging + constant vector magnitude... if I_t_m not wrong this is solvable) giving a new constraint each step._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I should then be able to really rotate a mesh from its local space to a target system known only by 3 orthogonal vectors in space._lt_/p_gt__lt_p_gt_I hope ..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-14T20:21:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jeromekenoby you_t_re our last hope!!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-15T07:14:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If can achieve it_co_ I_t_ll show the process demo._lt_/p_gt__lt_p_gt_Working on it on paper today._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[EDIT ] explanation here (in french) _dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/?p_eq_82643_qt__gt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/?p_eq_82643_lt_/a_gt__lt_/p_gt__lt_div_gt_validation welcome_lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Another question to be sure ..._lt_/p_gt__lt_p_gt_In the BJS left-handed system_co_ we_t_ve got an orthonormal set with this angle _lt_u_gt_orientations_lt_/u_gt_ _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_from Ox to Oy _dd_ + PI / 2_lt_/p_gt__lt_p_gt_from Ox to Oz _dd_ + PI / 2_lt_/p_gt__lt_p_gt_from Oy to Oz _dd_ + PI / 2_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_am I right ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-15T18:35:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Correct_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-16T12:49:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_mmh... something I don_t_t get_lt_/p_gt__lt_p_gt_here_co_ my cam is set z _eq_ -40 and the world axis are displayed _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11PL3J%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11PL3J#3_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if I rotate the box around y axis for_co_ say_co_ PI / 3_co_ I get this _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11PL3J%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11PL3J#4_lt_/a_gt__lt_/p_gt__lt_p_gt_I was expecting the box to move from the x red axis towards the z blue axis for PI / 3_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It looks like the PI / 3 is applied from _qt_-x_qt_ towards z_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In other terms_co_ according to what I understood from your former post about orientations (_lt_em_gt__qt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_from Ox to Oz _dd_ + PI / 2_qt__lt_/span_gt__lt_/em_gt_)_co_ I would believe a rotation of - PI / 3 is then applied _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11PL3J%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11PL3J#5_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_unless rotation direction are _dd__lt_/p_gt__lt_p_gt_from Ox to Oy _dd_ anti-clockwise_lt_/p_gt__lt_p_gt_from Oy to Oz _dd_ clockwise_lt_/p_gt__lt_p_gt_from Ox to Oz _dd_ clockwise_lt_/p_gt__lt_p_gt_because of the left-handed system ? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-17T16:18:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Crap you_t_re right_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ox-&gt_sm_oy _dd_ CCW_lt_/p_gt__lt_p_gt_oy-&gt_sm_oz_dd_ CW_lt_/p_gt__lt_p_gt_ox-&gt_sm_oz_dd_CW_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-17T19:24:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_aarrggg ... it promises headaches for cross_co_ dot products and angles_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_well_co_ for cross product Ox ^ Oz _dd__lt_/p_gt__lt_p_gt_(1_co_ 0_co_ 0) ^ (0_co_ 0_co_ 1) _eq_ (0_co_ 1_co_ 0) and not (0_co_ -1_co_ 0)_co_ right ?_lt_/p_gt__lt_p_gt_but there is - PI / 2 from Ox to Oz.... so I can_t_t really rely on cross product only to know the sign of an angle between two given arbitrary vectors_co_ can I ?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_More generally _dd__lt_/p_gt__lt_p_gt_if I_t_ve got two normalized vectors u and v. I_t_ve got a plane defined by a normal vector_lt_/p_gt__lt_p_gt_I want to know the angle a from u to v_lt_/p_gt__lt_p_gt_dot product _dd_ u.v _eq_ cos(a) _eq_&gt_sm_ a _eq_ acos(u.v) or a _eq_ - acos(u.v)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_but I don_t_t know then if I can rely on normal with cross(u_co_ v) comparison to get the sign... because of the CCW/CW different orientation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any idea ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-19T15:30:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Dk_co_ was that a large _qt_crap_qt_?  As in... BJS emergency refactor-grade _qt_crap_qt_?  Let_t_s hope not.  But I_t_m ready with the drums of coffee and donuts... as needed.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Are we going flying on _qt_To Hell With Backward Compat_qt_ airlines?  C_t_mon_co_ let_t_s gooooo!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  (I want sphere_t_s params reversed_co_ still.  How trivial_co_ eh?  Sorry.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m ready for a week of all-nighters!  I got a sleeping bag_co_ and I_t_m a great go-fer.  (go-fer food_co_ go-fer pixel ink_co_ etc).  I gotz a new Dell i7 comin_t_ in the mail ANY DAY NOW... look out!  Somebody who knows what they are doing.... can use it as a BJS refactoring workstation.  I_t_ll be their butler!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_C_t_mon_co_ BJS v3... in 2 weeks_co_ no compat guaranteed!  Ready?  GO!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  (I_t_m excited!)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-19T16:57:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I had not been paying much attention to this thread (know how to update verts already)_co_ but it seems to no longer be about its title.  Wonder now if that very late attempt to add a similar method to Quaternion.RotationYawPitchRoll() right before 2.0 was released might have been correct._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am really glad that I expressed my args for POV rotation in non-technical terminology._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_/** * Perform relative rotation change from the point of view of behind the front of the mesh. * Supports definition of mesh facing forward or backward. * @param {number} flipBack * @param {number} twirlClockwise * @param {number} tiltRight */public rotatePOV(flipBack_dd_ number_co_ twirlClockwise_dd_ number_co_ tiltRight_dd_ number)_dd_ void {_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-20T07:11:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_mmhh.. seems I spoke too fast_co_ as usual_co_ since (1_co_ 0_co_ 0)^(0_co_ 0_co_ 1) _eq_ (0_co_ -1_co_ 0)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This doesn_t_t really change the question _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Imagine I have an axis vector called _lt_em_gt_A_lt_/em_gt_._lt_/p_gt__lt_p_gt_Now I rotate a _lt_em_gt_U_lt_/em_gt_ vector around _lt_em_gt_A_lt_/em_gt_ for an angle theta. I call _lt_em_gt_V_lt_/em_gt_ the rotated _lt_em_gt_U_lt_/em_gt_._lt_/p_gt__lt_p_gt_So _lt_em_gt_theta_lt_/em_gt_ _eq_ acos(_lt_em_gt_U.V_lt_/em_gt_)  or _lt_em_gt_theta_lt_/em_gt_ _eq_ -acos(_lt_em_gt_U.V_lt_/em_gt_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I want to sign theta I could calculate _lt_em_gt_cross_lt_/em_gt_ _eq__lt_em_gt_ U^V_lt_/em_gt_ which is a vector collinear with _lt_em_gt_A_lt_/em_gt_._lt_/p_gt__lt_p_gt_If cross is the same direction than _lt_em_gt_A_lt_/em_gt__co_ so _lt_em_gt_theta_lt_/em_gt_ is the same sign than the arbitrary chosen angle orientation (CW or CCW) in the plane orthogonal to _lt_em_gt_A_lt_/em_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If all orientations are the same in the whole system (x-&gt_sm_y_co_  x-&gt_sm_z_co_ x-&gt_sm_z)_co_ it is easy to choose the same orientation for every other plane in the space then. Example _dd_ if this plane (orthogonal to _lt_em_gt_A_lt_/em_gt_) is then rotated onto the world x0z plane_co_ the formerly angle between _lt_em_gt_U_lt_/em_gt_ and _lt_em_gt_V_lt_/em_gt_ remains the same (same sign) on xOz._lt_/p_gt__lt_p_gt_But in the case_co_ BJS case and maybe other 3D engine_co_ the world system embbeds both orientations (CW and CCW)_co_ I guess we have to choose by ourselves an arbitrary angle orientation (CW or CCW) on our own planes and convert it if these planes (or angles) should be rotated onto one of world system planes _dd_ xOz_co_ xOy_co_ yOz._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am I right ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_not that easy ... ourg_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-20T12:05:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Arg_co_ I really feel stuck with all those angle signing..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So let me please rephrase once more my question to be really² sure_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_xOy _dd_ CCW  looking from negative or positive z ?   (seems to be CCW_co_ seen from negative z)_lt_/p_gt__lt_p_gt_yOz _dd_  CW looking from negative or positive x ? (seems to be CCW_co_ seen from negative x)_lt_/p_gt__lt_p_gt_xOz _dd_  CW looking from negative or positive y ? (seems to be CCW_co_ seen from negative y)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t understand which side of the plane of rotation we need to be on the rotation axis to determine the orientation (CW or CCW)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]