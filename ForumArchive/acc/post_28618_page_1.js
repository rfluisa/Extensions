[{"Owner":"yuccai","Date":"2017-02-22T13:26:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI find that the Observable class is useful to handle events. However the ActionManager class offers more types of events such as long press for instance but we can only use it on meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to know the fundamental difference between these two classes. Does one depend on the other ? How can I reproduce the events from ActionManager for the Observable ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-22T17:58:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe actionManager relies on observable to do its job. Observables are more low-level events where the ActionManager is here to provide a more user friendly vision\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2017-02-23T09:49:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn fact that_t_s a good question. ActionManager is used to manipulate events on meshes_co_ but if you want to catch those advanced events outside a mesh (on scene for instance)_co_ I think you have to implement yourself the same mechanims already set in scene.attachControl (which raises the ActionManager events).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe should create new _qt_advanced_qt_ Observers (longpress_co_ leftpick_co_ etc) in BJS and automatically notify them same time as ActionManager. I_t_ll have a look at this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW_co_ I_t_ve just noticed that ActionManager_t_s doc is not up to date (eg_co_ it is not explained that the difference between onPickEvent and onPickDownEvent is that onPickEvent is only triggered if mesh is clicked but not dragged_co_ while onPickDownEvent is always trigged when mesh is clicked)_co_ I_t_ll fix this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-23T17:10:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI appreciate the help!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2017-03-07T10:57:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ I have some questions relative to the implementation of the new custom Observers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t¤ My concern is about the fracking names of the new events_co_ mostly because _lt_em_gt_click _lt_/em_gt_is for a mouse and _lt_em_gt_tap _lt_/em_gt_is for touch... and I don_t_t know what to choose to express both. I remember having the same question when working on ActionManager_co_ but that was solved by distinguishing _lt_em_gt_pick_lt_/em_gt_ and _lt_em_gt_down_lt_/em_gt_. But for Observers I can_t_t use _lt_em_gt_pick_lt_/em_gt__co_ since _lt_em_gt_pick _lt_/em_gt_tells us that a mesh is picked_co_ but in Observers there is nothing to pick_co_ we are at scene level..._lt_br /_gt_\n\tPOINTERDOWN already exists and is ok. The new event should be a POINTERCLICK / POINTERTAP_co_ whatever the name it must explicitly tell that we are talking about a single click (with no following drag). Do you have a name suggestion? CLICK_co_ POINTERCLICK_co_ POINTERTAP_co_ POINTERSCHTROUMPF_co_ POINTERPICKINGOFNOOBJECTBUTITSASIF_co_ going crazy_co_ I need a hand...knowing that I also will have a double click event...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t¤ For the double-click event_co_ should the simple click also be raised when double-click happens?_lt_br /_gt_\n\tI had a look at usual usage_co_ and it tends to be that way (double raises a single first)_co_ It is_co_ then_co_ up to the user to handle that the way he wants (for instance waiting for double-click delay before doing something with simple click)._lt_br /_gt_\n\tBut I think it would be more interesting for BJS to provide users a nicer event manager_co_ where they can choose if they want_co_ or not_co_ to raise a previous simple click on double-click listening._lt_br /_gt_\n\tFor this we can implement a kind of _qt_exclusive_qt_ double-click. When activated we do not raise single click on double-click event (and the user do not have to manage that himself)_co_ but that also means in this mode every single click is trigged with a delay (waiting to be sure this is really a single and not a double). Do you think this could be interesting?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf yes_co_ we have two possibilities_dd__lt_br /_gt_\n\t1. we implement an other event mask (EXCLUSIVEDOUBLECLICK?_co_ EXCLUSIVEDOUBLESCHTROUMPF?)_lt_br /_gt_\n\t2. we add a flag somewhere (exclusiveDoubleClickMode_co_ false by default_co_ but where to add it?_co_ in Observers_co_ in Scene...)_lt_br /_gt_\n\tWhich one do you prefer?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-07T17:22:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFirst of all_co_ how do you plan to implement POINTERTAP (like this one _sm_)) ? I need to be sure this will not slowdown rendering\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSame for POINTERDOUBLETAP (do you like it?). I do not want to over engineer the event part. I don_t_t think there is a big ask for a way to configure single/double listening.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2017-03-07T19:39:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPOINTERTAP will be implemented the same way as ActionManager OnPickTrigger.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPOINTERDOUBLETAP will be implemented by checking time between previous click and current click_co_ if lower than particular delay_co_ it is a double click. At first click_co_ a click is raised_co_ at second click_co_ the time is checked_co_ and a click or a double-click is then raised. If exclusive double click mode is set (not set by default)_co_ every click will wait for this specific delay before raising (to determine if single or double).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"lihis","Date":"2017-03-07T20:29:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/6528-vousk-prod/?do_eq_hovercard_qt_ data-mentionid_eq__qt_6528_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/6528-vousk-prod/_qt_ rel_eq__qt__qt__gt_@Vousk-prod._lt_/a_gt_ What if i want to trigger the double click immediately when touched the second time? Like _lt_code_gt_OnPickDownTrigger. _lt_/code_gt__lt_img alt_eq__qt__dd_rolleyes_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ title_eq__qt__dd_rolleyes_dd__qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2017-03-08T09:36:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDouble click will be raised immediatly when touched the second time. It_t_s the single click which will be delayed_co_ in _qt_exclusive double click_qt_ mode only.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2017-03-08T09:44:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnd in any case_co_ POINTERDOWN observer will always be raised immediatly on any click.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2017-03-08T09:47:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe main purpose of POINTERTAP is to provide a way to get a click event only on real click and not on press-and-move-while-pressed.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"lihis","Date":"2017-03-08T15:09:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHuh_co_ for whatever reason i thought _qt_standard_qt_ double click _eq__eq__eq_ 2 x _qt_full clicks_qt_ but now that i tried it to open a text file_co_ the double click indeed triggers on click down. I suppose i just usually release the click so fast i haven_t_t noticed you don_t_t actually have to let it go for the double click to active. Interesting. _lt_img alt_eq__qt__dd_lol_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ title_eq__qt__dd_lol_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ anyway... what i wanted to throw out there is_dd_ since this double-click business seems mainly time related (what else is really different between single and double click?)_co_ could there perhaps be a place for some kind of action that helps with time instead of just clicking. I_t_m thinking something that lets you disable / modify / override already existing actions_co_ or add completely new actions / inputs_co_ but only for a period of time. So you could just have your normal click trigger/action_co_ but then you could have some other action to say that for the next 500ms when you click_sm_ do something else than the normal click instead. And if this was possible then you could use that for all kinds of different things_co_ like click some thing and then for the next 3 seconds if you press some key on keyboard do something. And then after the time is done_co_ that input / action is removed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2017-03-08T15:14:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat_t_s an interesting idea_co_ but clearly too specific for being added in BJS. It_t_s rather up to the user to create such a mecanism_co_ based on the events layer BJS provides.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"lihis","Date":"2017-03-08T15:18:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tToo specific? Isn_t_t that the opposite of too specific_co_ it would help users create double clicks and all kinds of different things them self instead of having to rely on 1 premade solution to double click.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-09T00:21:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo let_t_s proceed step by step_dd_ can you do a first PR for the TAP?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe will then add the DOUBLETAP once the TAP is ok _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2017-03-14T15:16:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOK_co_ PR is on its way (under yuccai_t_s git account).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry for not being _qt_step by step_qt__co_ there are in fact three new events in this PR _dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tPOINTERTAP (the equivalent of ActionManager.onPointerPick_co_ but at scene level)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tPOINTERDOUBLETAP (to catch double click_co_ at scene level)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tonDoublePickTrigger (ActionManager event to catch a double click on a mesh)\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tOf course implementation is open for discussion in the github pull request.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-14T15:17:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tok no worry\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]