[{"Owner":"SimonN","Date":"2018-11-21T21:36:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTrying to upgrade a working game I wrote on an earlier version of BabylonJs.  The code below uses 4.0.0-alpha.9 (having struggled somewhat to get the latest 3.3 to work with Oimo.js).  I get an error in Chrome_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.0e80bca1aa741549845941bb34c10149.png_qt_ data-fileid_eq__qt_21134_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21134_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.thumb.png.91b1a344c2573dab6230291efddcfdbe.png_qt_ alt_eq__qt_image.thumb.png.91b1a344c2573dab6230291efddcfdbe.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\there_t_s the offending code in  Chrome\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.8acc4d1c2fd91ac985c943412c74e98d.png_qt_ data-fileid_eq__qt_21131_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21131_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.thumb.png.bd2a715916cce2353069fe1686864a53.png_qt_ alt_eq__qt_image.thumb.png.bd2a715916cce2353069fe1686864a53.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t… and here_t_s the earlier place where billboard gets defined\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.71a197627ee565b322351373c0304765.png_qt_ data-fileid_eq__qt_21132_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21132_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.thumb.png.db9b26e74239aa66335b717fe63a5a28.png_qt_ alt_eq__qt_image.thumb.png.db9b26e74239aa66335b717fe63a5a28.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I comment out the 7 lines where I setPhysicsState and the 6 lines where I setLinearVelocity_co_ the scene loads ok.  If I comment out line 356 I get a similar error from 357.  I_t_m thinking that my BABYLON.Mesh.CreatePlane doesn_t_t have a setPhysicsState method any more and setLinearVelocity could have disappeared too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much. Simon\n_lt_/p_gt_\n\n_lt_p_gt_\n\tP.S. Great to see all the recent babylonjs activity_co_ it_t_s a fantastic creation_co_ I didn_t_t realize that this was happening from my use of Nuget Package Manager within Visual Studio until I started to dig deeper.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-21T23:54:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-11-22T00:47:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/33506-simonn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_33506_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/33506-simonn/_qt_ rel_eq__qt__qt__gt_@SimonN_lt_/a_gt_ Hey Simon_co_ based on this thread _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/29006-depreciated-set-physics-state-missing/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/29006-depreciated-set-physics-state-missing/_lt_/a_gt_ it looks like those methods were deprecated and removed_co_ replaced with new PhysicsImpostor_co_ getPhysicsImpostor().getParam(_qt_mass_qt_)_sm_ .  Likely any physics methods you were using that no longer work have been replaced. Hopefully the porting effort is minimal.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SimonN","Date":"2018-11-23T22:04:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThanks.  I now have it all working but have one additional question.  You can see the old working version at _lt_a href_eq__qt_http_dd_//bnieinsurance.com._qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//bnieinsurance.com._lt_/a_gt_  There are a number of spheres and for each sphere there_t_s a text label and a ghost that renders an animation if the sphere is clicked.  With the new code prior to the fix below_co_ the label and ghost don_t_t move_co_ only the sphere and the imposter.  The workaround I used to make the code work again is to move the label and ghost in each render loop_co_ which I_t_ve added  in the else part of the code snippet below_dd_  \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t//if any sphere is too high_co_ make it invisible (and the code above will at some point restart it_lt_br /_gt_\n\t\t\t        var yLimit _eq_ 35_sm_ _lt_br /_gt_\n\t\t\t        for (var counter3 _eq_ 1_sm_ counter3 &lt_sm__eq_ 6_sm_ counter3++) {_lt_br /_gt_\n\t\t\t            if (scene.meshes[counter3 + 1].position.y &gt_sm__eq_ yLimit) {_lt_br /_gt_\n\t\t\t                scene.meshes[counter3 + 1].visibility _eq_ false_sm__lt_br /_gt_\n\t\t\t                scene.meshes[counter3 + 7].visibility _eq_ false_sm__lt_br /_gt_\n\t\t\t            }_lt_br /_gt_\n\t\t\t            else_lt_br /_gt_\n\t\t\t            {_lt_br /_gt_\n\t\t\t                //11/23/2018 expensive operation inside render loop to set the position of the text labels (+7)_lt_br /_gt_\n\t\t\t                //and the ghost centers inside (+13) that become visible when a sphere is clicked._lt_br /_gt_\n\t\t\t                scene.meshes[counter3 + 7].position.x _eq_ scene.meshes[counter3 + 1].position.x_sm__lt_br /_gt_\n\t\t\t                scene.meshes[counter3 + 7].position.y _eq_ scene.meshes[counter3 + 1].position.y_sm__lt_br /_gt_\n\t\t\t                scene.meshes[counter3 + 7].position.z _eq_ scene.meshes[counter3 + 1].position.z_sm__lt_br /_gt_\n\t\t\t                scene.meshes[counter3 + 13].position.x _eq_ scene.meshes[counter3 + 1].position.x_sm__lt_br /_gt_\n\t\t\t                scene.meshes[counter3 + 13].position.y _eq_ scene.meshes[counter3 + 1].position.y_sm__lt_br /_gt_\n\t\t\t                scene.meshes[counter3 + 13].position.z _eq_ scene.meshes[counter3 + 1].position.z_sm__lt_br /_gt_\n\t\t\t            }_lt_br /_gt_\n\t\t\t        }\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe Oimo physics engine moves the sphere using the imposter_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    iSphereBnie[0] _eq_ new BABYLON.PhysicsImpostor(sphere1_co_ BABYLON.PhysicsImpostor.BoxImpostor)_sm__lt_br /_gt_\n\t\t\t    iSphereBnie[0].mass _eq_ 10_sm__lt_br /_gt_\n\t\t\t    iSphereBnie[0].friction _eq_ 0.0001_sm__lt_br /_gt_\n\t\t\t    iSphereBnie[0].restitution _eq_ 0.99_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t… but the old code somehow managed to move the label and the ghost along with the sphere.  I_t_ve looked thoroughly and can_t_t find anything that effects this_co_ the only thing I can think of is that there were some similarities in the names of the trio of sphere_co_ label and ghost that made this happen under the covers and with the new code that is no longer the case_co_ or my changing the name of the imposter and making the imposters a global array broke it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIn general terms_co_ I need one imposter to move 3 meshes in unison_co_ is there some easy way of doing this that is more efficient than using the render loop above?  It looks like there are joints to constrain two imposters_co_ but I don_t_t see anything to constrain 3 meshes to all be controlled by the same imposter?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThanks again!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-11-26T18:13:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you have a playground (_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#7149G4%230_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#7149G4#0_lt_/a_gt_) showing it not working that I can take a look at? If you attach a mesh as a child of the mesh with the impostor attached I would expect it to work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SimonN","Date":"2018-11-26T19:27:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks_co_ somewhat embarrassingly I managed to get this far without realizing that you can explicitly define parent/child relationships between meshes_co_ so after writing code like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh1.parent _eq_ mesh2_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand removing all the code where I set the position of the child meshes it worked fine.  Interestingly_co_ where the child mesh is there to display text_co_ using the parent child relationship works well when the objects move gently and having the text be readable only some of the time provides a good visual experience as the text moves and rotates with the parent mesh.  When you want the text on a BABYLON.Mesh.CreatePlane to be more readable_co_ the original approach works better.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAppreciate everything.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]