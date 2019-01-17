[{"Owner":"Pryme8","Date":"2017-07-03T20:43:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHas anyone done this yet in babylon JS I see a couple of examples but none of the projects I can reference have worked out the camera height in the process or the blending between LOD layers.  I am going to start trying to make a working example from the paper _lt_a href_eq__qt_http_dd_//www.vertexasylum.com/downloads/cdlod/cdlod_latest.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.vertexasylum.com/downloads/cdlod/cdlod_latest.pdf_lt_/a_gt__lt_br /_gt_\n\tbut would like to see how others have handled it._lt_br /_gt_\n\tI have looked at _lt_span style_eq__qt_color_dd_#007542_sm__qt__gt_github.com/darrylryan/_lt_b_gt_BabylonTerrain_lt_/b_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#007542_sm__qt__gt_ _lt_/span_gt_and _lt_span style_eq__qt_color_dd_#007542_sm__qt__gt_github.com/felixpalmer/_lt_b_gt_lod_lt_/b_gt_-_lt_b_gt_terrain_lt_/b_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#007542_sm__qt__gt_ _lt_/span_gt_but both of these are limited to 2d measurements and because I am going to be doing this on a planetary level with Spherical displacement I need to go a step farther._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso I am wondering how I should handle the frustum calculations because in theory nothing on the backside of the planet will need to be rendered but how do I establish the _qt_zone_qt_ is hidden on the other side of the planet? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-07-03T20:57:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#FJNR5%23148_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#FJNR5#148_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/DynamicTerrain_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/tree/master/DynamicTerrain_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-03T21:17:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ I can see the use in the technique you just posted_co_ but it is still not what I am looking for.  Ill keep reading and see if there are some answers to my questions with your solution though!_lt_br /_gt__lt_br /_gt_\n\tIf you take a peep at the pdf I linked in the top post_co_ you will see why I say its not quite what I am looking for._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\talso I am looking to do it with planes projected into a sphere_co_ and with multiple ones of them on the screen at any given time. see _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#DPSB16%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#DPSB16#9_lt_/a_gt_ for the example of the way the mesh will be set up.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-10T23:52:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI have my t-junctions made... now I gotta figure out how to implement them in a spherical projection...  I wish I had more then part time to focus on this._lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#IJTGJ3%2318_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#IJTGJ3#18_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-12T23:03:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#1_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tSo now I have my new terrain mesh_co_ I have to incorporate the t-junctions now from the prior playgrounds for when it has neighbors at a lower LOD._lt_br /_gt_\n\tThis was a big step I needed to get done because _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#IJTGJ3%2318_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_#3c6994_sm__qt__gt_http_dd_//playground.babylonjs.com/#IJTGJ3#18_lt_/a_gt_ would not be workable in the manor that I wanted due to the fact there would be way to many draw calls if I created the number of _qt_tPlanes_qt_ I would need to cover a quadrant.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNext step is the blending outer sections then create a new container object for quadrants of a _t_zone_t_.  These zones will then get a container for the planetary level and I should be well on my way to CDLOD Planets.  With my Das_Noise Lib things will get serous really quick with this I think._lt_br /_gt__lt_br /_gt_\n\tAnyways the question is_dd_ _lt_br /_gt_\n\tAfter looking at the math to create the indices what would be the best method to create the outer edges with the correct t-junctions_co_  Im guessing just some logic for if the row/col is at the first one or the last and then skip the extra point in the middle of the junctions by skipping even iterations.  The indices calculations are what I_t_m worried about_co_ anyone have any bright ideas?_lt_br /_gt__lt_br /_gt_\n\tMaybe keep the points_co_ but _qt_ignore_qt_ the indices I don_t_t need when making the step down junctions?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-14T00:39:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am stumped...  I need to test a list of meshs for distance before each drawframe for their distance to camera_co_ and if they are with in a certain range create a new set of meshes and then test their distance so on and so forth before each frame is rendered. _lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#6_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess I do not understand quad-tree equations_co_ or how to recursively go through the steps of the LOD and keep testing their distances without impacting performance.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-14T14:16:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis topic piqued my interest. I would have replied earlier but I wanted something to offer before answering and it has taken a few days to come up with something worthwhile. Well IMHO it is worthwhile_co_ for me at least whether it is for you I will have to wait and see.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope you don_t_t mind some suggestions even if they are a little tangential.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTwo quotes from the CDLOD paper struck me (my bold and italics)\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tit is structured around a quadtree of _lt_em_gt__lt_strong_gt_regular grids_lt_/strong_gt__lt_/em_gt__co_ . . . which provides it with better level-of-detail distribution. . . .the _lt_em_gt__lt_strong_gt_same_lt_/strong_gt__lt_/em_gt_ amount of on-screen triangle _lt_em_gt_complexity_lt_/em_gt_.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNeither the sphere nor the mapping of a ground mesh onto the sphere meets these criteria.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13852_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_07/wireframesphere.jpg.612a232f08972972cee80b6ef9f79858.jpg_qt_ alt_eq__qt_wireframesphere.jpg.612a232f08972972cee80b6ef9f79858.jpg_qt_ /_gt_     _lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13853_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_07/wireframesphere2.jpg.4e551e7b7e215d60932ac85e05ed94ad.jpg_qt_ alt_eq__qt_wireframesphere2.jpg.4e551e7b7e215d60932ac85e05ed94ad.jpg_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHowever I noticed that you were using an icosphere (for the core) and though not totally meeting the criteria is does so much more closely than the other two methods.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13854_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_07/wireico.jpg.f5d85df4169c58d3b9436dda6248a189.jpg_qt_ alt_eq__qt_wireico.jpg.f5d85df4169c58d3b9436dda6248a189.jpg_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAlso the equilateral triangles could form the nodes for the CDLOD quadtree system.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13851_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_07/isogrid.jpg.f9506e61a403f9bc5d784118a4bb3000.jpg_qt_ alt_eq__qt_isogrid.jpg.f9506e61a403f9bc5d784118a4bb3000.jpg_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSo I decided to pursue the idea of using an icosphere but leave the CDLOD part for later after I saw what happened with just the icosphere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe next step was to cause a perturbance using a heighmap. Now I remembered that  fur material not in high level mode allows the use of heightmaps. Giving this a try I found that it caused gapping on the icosphere along some edges.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13856_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_07/gap.jpg.292bf0d3f4d25f570f7f0b553bdb1881.jpg_qt_ alt_eq__qt_gap.jpg.292bf0d3f4d25f570f7f0b553bdb1881.jpg_qt_ /_gt_         _lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13858_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_07/manygaps.jpg.2cbfea4eed59fa785587b868be15c539.jpg_qt_ alt_eq__qt_manygaps.jpg.2cbfea4eed59fa785587b868be15c539.jpg_qt_ /_gt_  _lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13857_qt_ height_eq__qt_358_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_07/gap0.jpg.6f3373e19114f819e0bda657b4d3b405.jpg_qt_ width_eq__qt_377_qt_ alt_eq__qt_gap0.jpg.6f3373e19114f819e0bda657b4d3b405.jpg_qt_ /_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tflat _eq_ false                                                                                                  flat _eq_ true                                                                        flat _eq_ false and an updated version of CreateIcoSphere\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is because_co_ even when flat _eq_ false_co_ each triangular facet in the icosphere has its own three vertices and so at the borders of the heightmap if pixel colors are not identical vertices appearing to share a position have their positions out even by a small factor can be moved differently. The  flat option_co_ with default true for the icosphere  only changes the the normals of the facet vertices and does not make the mesh smooth by sharing vertices.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother benefit of facets sharing vertices is that there is a reduction in the number of vertices by a factor of just over 5.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe next step was to update the CreateIcoSphere function to remove repeated vertices when flat _eq_ false and as you can see in the third image there is some seaming but no gapping.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaving done this update I cannot use the PG to show the results as I modified babylon.max.js (for those who are interested this is not the final v3.0 but one I downloaded during its beta stage).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I uploaded to github to give these examples.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//grideasy.github.io/planet/icoplanet.html_qt_ rel_eq__qt_external nofollow_qt__gt_example 1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//grideasy.github.io/planet/icoplanet2.html_qt_ rel_eq__qt_external nofollow_qt__gt_example 2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//grideasy.github.io/planet/icoplanet3.html_qt_ rel_eq__qt_external nofollow_qt__gt_example 3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe main differences are the type of image used for heightmap and texture. Call the one below an isomap. This comes directly from the work of G_t_Kar in this _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/17786-icosphere-20-sides-polyhedron-uv-subdivide-smoothflat-normals/_qt_ rel_eq__qt__qt__gt_post_lt_/a_gt_._lt_span_gt_ _lt_/span_gt__lt_span_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13860_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_07/isomap.jpg.e2298e6a44bb57124414c160718ff063.jpg_qt_ alt_eq__qt_isomap.jpg.e2298e6a44bb57124414c160718ff063.jpg_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\texample 1 matching rectangular image and rectangular heightmap\n_lt_/p_gt_\n\n_lt_p_gt_\n\texample 2 rectangular heightmap and isomap image\n_lt_/p_gt_\n\n_lt_p_gt_\n\texample 3 matching image and heightmap from isomap.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is about as far as I have got in development. Have to go out now but will add a few more of my thoughts later.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-14T15:35:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_181698_qt_ data-ipsquote-contentid_eq__qt_31425_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1499992787_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t14 hours ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI guess I do not understand quad-tree equations_co_ or how to recursively go through the steps of the LOD and keep testing their distances without impacting performance.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNeither do I but I am not sure it is necessary for spheres. During the next paragraph I do not really know what I am talking about but other might be able to correct any misunderstanding.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the CDLOD paper they are talking about a giant terrain only some of which gets rendered at any time. From their tables the most triangles rendered at any one time is 446K_co_ so their CDLOD methods brings the triangles needed for the whole terrain down to 446K that have to be rendered each frame. SO 446K is an acceptable number of triangles. Setting the number of subdivisions to 128 for the icosphere gives 330K triangles and it seems pretty smooth to me. Setting the subdivisions to 256 which is probably way over the top gives 1310K triangles and takes a few seconds to load it renders frame by frame well. IMHO because you are working with spheres not planes then you can get away with not using LOD.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have a number of planets then have two or three different versions for each planet with number of subdivisions depending how far away you are_co_ enabling each as appropriate.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I haven_t_t worked out yet is how you make an isomap of an area. Will look into that next.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood luck with you project.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-14T16:34:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhen I get home Ill take a look at your demos_co_ they seem to not be working for me at work &gt_sm__&lt_sm_.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-14T18:50:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnyone have a better equation then this to figure out when to up the meshes LOD?  Im using something like_dd__lt_br /_gt__lt_br /_gt_\n\tvar _d _eq_ Math.pow(minDistance_co_ maxLOD - meshesLODLevel)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif(_d &gt_sm_ cameraDistance2Center){//split}else{//skip}_lt_br /_gt__lt_br /_gt_\n\tbut the numbers get really high really fast and are not what I want._lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#10_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ I like the idea of doing it as a Icosphere as well_co_ but will prolly go with the normalized cube.  This is so I can identify neighbors and make sure that I know when to use t-junctions for LOD changes.  If you can figure out how to do it with an icosphere (which you might have already in your demos ill look when I can) then I will for sure just use that ^_^._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t*UPDATE*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tchanged it to this_dd_ var _d _eq_ this.minDist*Math.pow(2 _co_ this.maxLOD - zone.level)_sm_ and I like it _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#13_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tnow I need to make it handle more then one level shift..._lt_br /_gt_\n\tif you move closer to the plane you will see it up its detail/split once._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t*UPDATE 2*\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#15_lt_/a_gt__lt_br /_gt_\n\tnow to handle zooming out!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-17T15:49:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thopefully I figure out a good way to decide when to merge the meshes_co_ and if I should dispose the larger LOD_t_s from memory or not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I am going to have each zone have a prototype function to check if all of its children are out of range of the LOD layer_co_ and if so re-enable the parent_co_ and dispose all its children._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2322_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#22_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI am having trouble with this... uhg In my mind this should work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-17T19:02:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t*UPDATE*\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMUAHAHAHA I have done it!     var newLOD _eq_ this.level+1_sm_ was the problem line... I had     var newLOD _eq_ this.level+_eq_1_sm_ which broke all the calculations._lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#23_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill a little glitchy_co_ on the merging but I should be able to make this a working model now_co_ it looks like it may be only able to go back one level of LOD at this time.  But given the limited focus I have gotten to put on this its a start!_lt_br /_gt__lt_br /_gt_\n\t*UPDATE*_lt_br /_gt_\n\tFixed _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2324_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#24_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tNow to do a Spherical Projection_co_ and then implement my 3d Noise library to establish height maps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-17T21:49:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2331_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#31_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tTerrain LOD yes Please _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ &lt_sm_- You two should like this.  Ill be doing the planetary version here sometime once I have a chance to sit and focus.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou may have to refresh or hit run again till Das_Noise loads.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t*EDIT* Also I changed the title of this thread to match the method that I decided to go with for the LOD.  I did not really understand CDLOD was moving the terrain not the camera_co_ and that method does not work for what my final goal is. for a CDLOD solution _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ above examples would work better.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-07-18T01:25:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyour algo is pretty nice and the terrain really looks nice when flying upon with the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy approach is different (and is my own from my experience about the BJS vertex buffer size variation regarding the GC behavior_co_ no such a sophisticated algo like yours) _dd_ to keep a constant number of vertices for the terrain mesh and to adjust its shape to the map obvisouly but also to the current camera distance to simulate a LOD behavior.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLike you understand it_co_ the terrain mesh moves with the camera (it was the real challenge to perform) because it_t_s size fixed so not that big in the World_co_ anyway it_t_s far tinier than the map it adjusts to.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI used a ribbon because I_t_m lazy and because it_t_s the simpler BJS provided mesh type to easily morph a map. I could have used a dedicated better designed basic terrain mesh looking like yours (maybe I_t_ll do it some time).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-18T16:07:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt__lt_br /_gt_\n\tdo you think I should displace the terrain prior to projecting it to a sphere_co_ or apply the projection then displace the point by finding the vector angle of the point to the center of the planet and scaling it that way?_lt_br /_gt__lt_br /_gt_\n\tIm just mulling over my options and what would be the best solution for the displacement on a planetary scale.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-18T17:32:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_strong_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2333_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#33_lt_/a_gt__lt_/strong_gt__lt_br /_gt__lt_br /_gt_\n\tOhh boy_co_ things just got complicated!  I gotta figure out how to get this to split down in the correct way now that its a sphere.  I think I will hold off on the projection into a sphere until each quadtree leaf propagates into the correct area!_lt_br /_gt__lt_br /_gt_\n\tIts getting close though...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need some help with my math_dd__lt_br /_gt_\n\tso for each polar face I have a normal vector so like for the _qt_front_qt_ one it would be \n_lt_/p_gt_\n\n_lt_p_gt_\n\tnew BABYLON.Vector3(Math.PI*-0.5_co_0_co_0)\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhich rotates the plane in the direction I need_co_ but now I need to figure out how to include this in the placement of the LOD level up from the initial.  I do not want to have to do any sort of logic loops to establish which direction the plane needs to move I ws hoping for some sort of tricky math.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLike if my normal vector is the above one_co_ convert it to _lt_br /_gt_\n\tvar faceNorm _eq_ new BABYLON.Vector3(-1_co_0_co_0) and then apply that to the positioning calculation of_lt_br /_gt__lt_br /_gt_\n\tthis.children[0].mesh.position _eq_ this.mesh.position.clone().add(new BABYLON.Vector3(-this.children[0]._size*0.5_co_0_co_this.children[0]._size*0.5))_sm__lt_br /_gt__lt_br /_gt_\n\tand have it be something like\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis.children[0].mesh.position _eq_ this.mesh.position.clone().add(_lt_br /_gt_\n\t(new BABYLON.Vector3(-this.children[0]._size*0.5_co_0_co_this.children[0]._size*0.5)).cross(faceNorm)_lt_br /_gt_\n\t)_sm__lt_br /_gt__lt_br /_gt_\n\tNot sure if I was just speaking jibberish or if anyone gets what Im talking about._lt_br /_gt__lt_br /_gt_\n\tAlso Im going to have to come up with a new calculation for projecting the quadleaves into a sphere correctly_co_ but ill do that after I get their positioning correct._lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t*UPDATE*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found a work around_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2335_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#35_lt_/a_gt__lt_br /_gt_\n\tnow I need to figure out why my distance calculation is not working_co_ it should not split the back and front poles that I have being displayed at the same time and in the same manor_co_ so something is off on the position of the mesh or at least how I am referencing it._lt_br /_gt_\n\tFuuu this is becoming a headache.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-18T18:45:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2336_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#36_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tOk now I just need to figure out why all the meshes are returning the same position.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-07-18T18:48:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think I would displace the terrain on the sphere directly (NOT displacing it first on a planar logic map and then projecting it)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-18T18:55:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCool_co_ now I have to figure out why the positions of the meshs are coming up as 0_co_0_co_0..._lt_br /_gt__lt_br /_gt_\n\twhy would after I position the mesh/zones they have incorrect positions stored_co_ but are appearing in the correct area?_lt_br /_gt__lt_br /_gt_\n\tAhh it was line 76... so baking the vertices sets the mesh position to 0_co_0_co_0._lt_br /_gt_\n\tIs there a way to bake the vertices position_co_ but keep the meshs position intact? &lt_sm_- _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ (if you have a moment)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-18T19:47:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2339_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#39_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI am so close it hurts.... &gt_sm__&lt_sm_ I guess I need a new projection algorithm. _lt_br /_gt__lt_br /_gt_\n\t***Edit***_lt_br /_gt_\n\tGotta make some fixes to the positioning and then this should work._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tOk now I am beating my head into a wall... everything works when its a cube_co_ but the second I try to project into a sphere everything goes to shit..._lt_br /_gt_\n\tCube_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2340_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#40_lt_/a_gt__lt_br /_gt_\n\tSphere_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2341_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#41_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tIf change the displace method to not be wrapped in a timeout_co_ I get even more odd behavior._lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TJBTN2%2342_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TJBTN2#42_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tAbout to give up on this &gt_sm__&lt_sm_ and go back to texture synthesis scripts... rabble rabble rabble...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]