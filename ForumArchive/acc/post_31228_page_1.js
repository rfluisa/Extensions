[{"Owner":"Borjan","Date":"2017-06-22T19:38:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_o_1bjane71f1lurdfpbo91srbhuma_qt_ rel_eq__qt__qt__gt_X.html_lt_/a_gt_I intend to use Babylon.js for displaying digraphs that are uploaded by the end-user.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve noticed that that the memory grows after each upload (and the rotations and panning are getting slower).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tObviously_co_ I have to get rid of the previously loaded graphs_co_ so I_t_ve declared scene as a global variable and have included the statement_dd_ if (scene !_eq_ null) scene.dispose()_sm_ before creating the next scene. However_co_ if the scene exist_co_ I receive the error _qt_No camera defined_qt_ and I have to reload the page._lt_br /_gt_\n\tI_t_m a novice to javascript_co_ babylon.js and 3D - I_t_m presuming I_t_m doing something obviously wrong. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_The error (SCRIPT5022) is in_dd_ babylon.2.5.js (12_co_14463)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Tried to attach the page file_co_ but the uploading is failing with err -200 .... Here is the complete page_co_ erroring statement marked red_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_!DOCTYPE html&gt_sm__lt_br /_gt_\n\t&lt_sm_html&gt_sm__lt_br /_gt_\n\t&lt_sm_head&gt_sm__lt_br /_gt_\n\t    &lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_qt_ charset_eq__qt_utf-8_qt_ /&gt_sm__lt_br /_gt_\n\t    &lt_sm_title&gt_sm_Babylon - Getting Started&lt_sm_/title&gt_sm__lt_br /_gt_\n\t    &lt_sm_script src_eq__qt_babylon.2.5.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_br /_gt_\n\t    &lt_sm_script src_eq__qt_hand-1.3.7.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    &lt_sm_style&gt_sm__lt_br /_gt_\n\t        html_co_ body {_lt_br /_gt_\n\t            overflow_dd_ hidden_sm__lt_br /_gt_\n\t            width_dd_ 100%_sm__lt_br /_gt_\n\t            height_dd_ 100%_sm__lt_br /_gt_\n\t            margin_dd_ 0_sm__lt_br /_gt_\n\t            padding_dd_ 0_sm__lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        #renderCanvas {_lt_br /_gt_\n\t            width_dd_ 100%_sm__lt_br /_gt_\n\t            height_dd_ 100%_sm__lt_br /_gt_\n\t            touch-action_dd_ none_sm__lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        .button {_lt_br /_gt_\n\t            background-color_dd_ #4CAF50_sm_ /* Green */_lt_br /_gt_\n\t            border_dd_ none_sm__lt_br /_gt_\n\t            color_dd_ white_sm__lt_br /_gt_\n\t            padding_dd_ 15px 32px_sm__lt_br /_gt_\n\t            text-align_dd_ center_sm__lt_br /_gt_\n\t            text-decoration_dd_ none_sm__lt_br /_gt_\n\t            display_dd_ inline-block_sm__lt_br /_gt_\n\t            font-size_dd_ 18px_sm__lt_br /_gt_\n\t            font_dd_ verdana_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t    &lt_sm_/style&gt_sm__lt_br /_gt_\n\t&lt_sm_/head&gt_sm__lt_br /_gt_\n\t&lt_sm_body&gt_sm__lt_br /_gt_\n\t    &lt_sm_script&gt_sm__lt_br /_gt_\n\t        var fName _eq_ _t_..._t__sm__lt_br /_gt_\n\t        var displayModel_sm__lt_br /_gt_\n\t        var engine_sm__lt_br /_gt_\n\t        var xhr_sm__lt_br /_gt_\n\t        var scene_sm__lt_br /_gt_\n\t        window.addEventListener(_t_DOMContentLoaded_t__co_ function () {_lt_br /_gt_\n\t            // get the canvas DOM element_lt_br /_gt_\n\t            var canvas _eq_ document.getElementById(_t_renderCanvas_t_)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            // load the 3D engine_lt_br /_gt_\n\t            engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_br /_gt_\n\t            window.addEventListener(_t_resize_t__co_ function () {_lt_br /_gt_\n\t                engine.resize()_sm__lt_br /_gt_\n\t            })_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        )_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        // *************************************************************************************************************************************_lt_br /_gt_\n\t        //http_dd_//borjan5/ArchLS/api/SoaScape3D/Render25D/62b702b6-7903-49f4-b609-5ccda2bdba4f_lt_br /_gt_\n\t        function renderApiTest() {_lt_br /_gt_\n\t            var url _eq_ _qt_http_dd_//borjan5/ArchLS/api/SoaScape3D/Render25D/62b702b6-7903-49f4-b609-5ccda2bdba4f_qt__sm__lt_br /_gt_\n\t            xhr _eq_ new XMLHttpRequest()_sm__lt_br /_gt_\n\t            xhr.open(_qt_GET_qt__co_ url_co_ false)_sm__lt_br /_gt_\n\t            xhr.setRequestHeader(_qt_Content-type_qt__co_ _qt_application/json_qt_)_sm__lt_br /_gt_\n\t            xhr.addEventListener(_qt_load_qt__co_ apiComplete_co_ false)_sm__lt_br /_gt_\n\t            /*_lt_br /_gt_\n\t            xhr.addEventListener(_qt_error_qt__co_ apiFailed_co_ false)_sm__lt_br /_gt_\n\t            xhr.addEventListener(_qt_abort_qt__co_ apiCanceled_co_ false)_sm_ */_lt_br /_gt_\n\t            xhr.send()_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        function renderFile25D() {_lt_br /_gt_\n\t            var url _eq_ _qt_http_dd_//borjan5/ArchLS/api/SoaScape3D/Render25D/62b702b6-7903-49f4-b609-5ccda2bdba4f_qt__sm__lt_br /_gt_\n\t            xhr _eq_ new XMLHttpRequest()_sm__lt_br /_gt_\n\t            xhr.open(_qt_GET_qt__co_ url_co_true)_sm__lt_br /_gt_\n\t            xhr.setRequestHeader(_qt_Content-type_qt__co_ _qt_application/json_qt_)_sm__lt_br /_gt_\n\t            xhr.addEventListener(_qt_load_qt__co_ apiComplete_co_ false)_sm__lt_br /_gt_\n\t            xhr.send()_sm__lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        function renderFile() {_lt_br /_gt_\n\t            alert(_t_Not there yet_t_)_sm__lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        // *************************************************************************************************************************************_lt_br /_gt_\n\t        function renderDemo() {_lt_br /_gt_\n\t            var url _eq_ _qt_http_dd_//borjan5/ArchLS/api/SoaScape3D/RenderDemo_qt__sm__lt_br /_gt_\n\t            xhr _eq_ new XMLHttpRequest()_sm__lt_br /_gt_\n\t            xhr.open(_qt_GET_qt__co_ url_co_ true)_sm__lt_br /_gt_\n\t            xhr.setRequestHeader(_qt_Content-type_qt__co_ _qt_application/json_qt_)_sm__lt_br /_gt_\n\t            xhr.addEventListener(_qt_load_qt__co_ apiComplete_co_ false)_sm__lt_br /_gt_\n\t            _lt_br /_gt_\n\t            xhr.addEventListener(_qt_error_qt__co_ apiFailed_co_ false)_sm__lt_br /_gt_\n\t            xhr.addEventListener(_qt_abort_qt__co_ apiCanceled_co_ false)_sm_ _lt_br /_gt_\n\t            xhr.send()_sm__lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        // *************************************************************************************************************************************_lt_br /_gt_\n\t        function renderBuiltIn() {_lt_br /_gt_\n\t            displayModel _eq_ {_lt_br /_gt_\n\t                _qt_Title_qt__dd_ _qt_Built-in Data_qt__co_ _qt_Mode_qt__dd_ 1_co__lt_br /_gt_\n\t                _qt_Applications_qt__dd_ [_lt_br /_gt_\n\t                    { _qt_Name_qt__dd_ _qt_APPL1_qt__co_ _qt_Form_qt__dd_ 0_co_ _qt_Id_qt__dd_ 0_co_ _qt_ToolTip_qt__dd_ _qt__qt__co_ _qt_V3_qt__dd_ 0_co_ _qt_X_qt__dd_ 46.5826874_co_ _qt_Y_qt__dd_ 30.3723526_co_ _qt_Z_qt__dd_ 0.0 }_co__lt_br /_gt_\n\t                    { _qt_Name_qt__dd_ _qt_APPL2_qt__co_ _qt_Form_qt__dd_ 0_co_ _qt_Id_qt__dd_ 1_co_ _qt_ToolTip_qt__dd_ _qt__qt__co_ _qt_V3_qt__dd_ 0_co_ _qt_X_qt__dd_ 91.46761_co_ _qt_Y_qt__dd_ 50.6884537_co_ _qt_Z_qt__dd_ 36.0399628 }_co__lt_br /_gt_\n\t                    { _qt_Name_qt__dd_ _qt_APPL3_qt__co_ _qt_Form_qt__dd_ 0_co_ _qt_Id_qt__dd_ 2_co_ _qt_ToolTip_qt__dd_ _qt__qt__co_ _qt_V3_qt__dd_ 0_co_ _qt_X_qt__dd_ 51.7862473_co_ _qt_Y_qt__dd_ 81.5939941_co_ _qt_Z_qt__dd_ 36.0399628 }_lt_br /_gt_\n\t                ]_co__lt_br /_gt_\n\t                _qt_Services_qt__dd_ [_lt_br /_gt_\n\t                    { _qt_Name_qt__dd_ _qt_SERVICE1_qt__co_ _qt_ProviderId_qt__dd_ 0_co_ _qt_Form_qt__dd_ 1_co_ _qt_Id_qt__dd_ 0_co_ _qt_ToolTip_qt__dd_ _qt__qt__co_ _qt_V3_qt__dd_ 0_co_ _qt_X_qt__dd_ 50.97662_co_ _qt_Y_qt__dd_ 36.7166367_co_ _qt_Z_qt__dd_ 6.359515 }_lt_br /_gt_\n\t                ]_co_ _qt_ConsumingRelations_qt__dd_ [{ _qt_ConsumerId_qt__dd_ 1_co_ _qt_ServiceId_qt__dd_ 0_co_ _qt_ProviderId_qt__dd_ 0 }_co_ { _qt_ConsumerId_qt__dd_ 2_co_ _qt_ServiceId_qt__dd_ 0_co_ _qt_ProviderId_qt__dd_ 0 }_lt_br /_gt_\n\t                ]_co__lt_br /_gt_\n\t                _qt_DisplayBoundary_qt__dd_ { _qt_Form_qt__dd_ 0_co_ _qt_X_qt__dd_ 69.025146484375_co_ _qt_Y_qt__dd_ 55.983173370361328_co_ _qt_Z_qt__dd_ 36.039962768554688_co_ _qt_W_qt__dd_ 22.442462921142578_co_ _qt_H_qt__dd_ 25.610820770263672 }_co__lt_br /_gt_\n\t                _qt_LastError_qt__dd_ _qt__qt__lt_br /_gt_\n\t            }_sm__lt_br /_gt_\n\t            showDisplayModel()_sm__lt_br /_gt_\n\t        }       _lt_br /_gt_\n\t        // *************************************************************************************************************************************_lt_br /_gt_\n\t        // *************************************************************************************************************************************_lt_br /_gt_\n\t        function myUpload() {_lt_br /_gt_\n\t            var file _eq_ document.getElementById(_t_9999_t_).files[0]_sm__lt_br /_gt_\n\t            var ajax _eq_ new XMLHttpRequest_sm__lt_br /_gt_\n\t            var formData _eq_ new FormData_sm__lt_br /_gt_\n\t            formData.append(_t_archimateFile_t__co_ file)_sm__lt_br /_gt_\n\t            //alert(_t_aa1_t_)_sm__lt_br /_gt_\n\t            ajax.upload.addEventListener(_qt_progress_qt__co_ myProgressHandler_co_ false)_sm__lt_br /_gt_\n\t            //ajax.addEventListener(_t__t_)_sm__lt_br /_gt_\n\t            ajax.addEventListener(_t_load_t__co_ myOnLoadHandler_co_ false)_sm__lt_br /_gt_\n\t            fName _eq_ generateUUID()_sm__lt_br /_gt_\n\t            ajax.open(_t_PUT_t__co_ _t_http_dd_//BORJAN5/BAB_DATA/_t_ + fName + _t_.xml_t__co_ true)_sm__lt_br /_gt_\n\t            ajax.send(formData)_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        function generateUUID() {_lt_br /_gt_\n\t            var d _eq_ new Date().getTime()_sm__lt_br /_gt_\n\t            if (window.performance &amp_sm_&amp_sm_ typeof window.performance.now _eq__eq__eq_ _qt_function_qt_) {_lt_br /_gt_\n\t                d +_eq_ performance.now()_sm__lt_br /_gt_\n\t            }_lt_br /_gt_\n\t            var uuid _eq_ _t_xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx_t_.replace(/[xy]/g_co_ function (c) {_lt_br /_gt_\n\t                var r _eq_ (d + Math.random() * 16) % 16 | 0_sm__lt_br /_gt_\n\t                d _eq_ Math.floor(d / 16)_sm__lt_br /_gt_\n\t                return (c _eq__eq_ _t_x_t_ ? r _dd_ (r &amp_sm_ 0x3 | 0x8)).toString(16)_sm__lt_br /_gt_\n\t            })_sm__lt_br /_gt_\n\t            return uuid_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        function myProgressHandler(event) {_lt_br /_gt_\n\t            //your code to track upload progress_lt_br /_gt_\n\t            var p _eq_ Math.floor(event.loaded / event.total * 100)_sm__lt_br /_gt_\n\t            document.getElementById(_qt_uuid_qt_).textContent _eq_ fName + _t_  _t_ + p + _t_%_t__sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        function myOnLoadHandler(event) {_lt_br /_gt_\n\t            // your code on finished upload_lt_br /_gt_\n\t            // document.title _eq_ event.target.responseText_sm__lt_br /_gt_\n\t            document.getElementById(_qt_25D_qt_).disabled _eq_ false_sm__lt_br /_gt_\n\t            document.getElementById(_qt_3D_qt_).disabled _eq_ false_sm__lt_br /_gt_\n\t            document.getElementById(_qt_2D_qt_).disabled _eq_ false_sm__lt_br /_gt_\n\t            // alert(_t_DONE _t_ + event.target.responseText)_sm__lt_br /_gt_\n\t            document.getElementById(_qt_uuid_qt_).textContent _eq_ _t_  File uploaded_dd_ _t_ + fName + _qt_.xml_qt__sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        function apiComplete(evt) {_lt_br /_gt_\n\t            var data _eq_ xhr.responseText_sm__lt_br /_gt_\n\t            //alert(_t_API DONE_dd_ _t_ + data)_sm__lt_br /_gt_\n\t            displayModel _eq_ JSON.parse(data)_sm__lt_br /_gt_\n\t            showDisplayModel()_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        function showDisplayModel() {_lt_br /_gt_\n\t            var scene _eq_ createSceneAndShow()_sm__lt_br /_gt_\n\t            engine.runRenderLoop(function () {_lt_br /_gt_\n\t                scene.render()_sm__lt_br /_gt_\n\t            })_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        function apiFailed(evt) {_lt_br /_gt_\n\t            alert(_qt_An error occurred while transferring the file._qt_)_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        function apiCanceled(evt) {_lt_br /_gt_\n\t            alert(_qt_The transfer has been canceled by the user._qt_)_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        // *************************************************************************************************************************************_lt_br /_gt_\n\t        function createSceneAndShow () {_lt_br /_gt_\n\t            var canvas _eq_ document.getElementById(_t_renderCanvas_t_)_sm__lt_br /_gt_\n\t           _lt_strong_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_ if (scene) scene.dispose()_sm__lt_/span_gt__lt_/strong_gt__lt_br /_gt_\n\t            scene _eq_ new BABYLON.Scene(engine)_sm__lt_br /_gt_\n\t            var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 1_co_ 0.8_co_ 600_co_ new BABYLON.Vector3(50_co_ 50_co_ 50)_co_ scene)_sm__lt_br /_gt_\n\t            camera.attachControl(canvas_co_ false)_sm__lt_br /_gt_\n\t            var light _eq_ new BABYLON.HemisphericLight(_qt_hemi_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm__lt_br /_gt_\n\t            var material1 _eq_ new BABYLON.StandardMaterial(_qt_mat_qt__co_ scene)_sm__lt_br /_gt_\n\t            var material2 _eq_ new BABYLON.StandardMaterial(_qt_mat_qt__co_ scene)_sm__lt_br /_gt_\n\t            for (var key in displayModel.Applications) {_lt_br /_gt_\n\t                if (displayModel.Applications.hasOwnProperty(key)) {_lt_br /_gt_\n\t                    var sphere _eq_ BABYLON.Mesh.CreateSphere(displayModel.Applications[key].Name_co_ 16_co_ 4_co_ scene)_sm__lt_br /_gt_\n\t                    displayModel.Applications[key].V3 _eq_ new BABYLON.Vector3(displayModel.Applications[key].X_co__lt_br /_gt_\n\t                        displayModel.Applications[key].Z_co__lt_br /_gt_\n\t                        displayModel.Applications[key].Y)_sm__lt_br /_gt_\n\t                    sphere.position _eq_ displayModel.Applications[key].V3_sm__lt_br /_gt_\n\t                    sphere.material _eq_ material1_sm__lt_br /_gt_\n\t                }_lt_br /_gt_\n\t            }_lt_br /_gt_\n\t            material1.diffuseColor _eq_ new BABYLON.Color3(1.5_co_ 0_co_ 0)_sm__lt_br /_gt_\n\t            var linesColor1 _eq_ new BABYLON.Color3(1_co_ 0.2_co_ 0.1)_sm__lt_br /_gt_\n\t            for (var key in displayModel.Services) {_lt_br /_gt_\n\t                if (displayModel.Services.hasOwnProperty(key)) {_lt_br /_gt_\n\t                    var obj _eq_ BABYLON.Mesh.CreateSphere(displayModel.Services[key].Name_co_ 16_co_ 4_co_ scene)_sm__lt_br /_gt_\n\t                    displayModel.Services[key].V3 _eq_ new BABYLON.Vector3(displayModel.Services[key].X_co__lt_br /_gt_\n\t                        displayModel.Services[key].Z_co__lt_br /_gt_\n\t                        displayModel.Services[key].Y)_sm__lt_br /_gt_\n\t                    obj.position _eq_ displayModel.Services[key].V3_sm__lt_br /_gt_\n\t                    var pId _eq_ displayModel.Services[key].ProviderId_sm__lt_br /_gt_\n\t                    var myLines _eq_ BABYLON.Mesh.CreateLines(_qt_a_qt__co_ [obj.position_co_ displayModel.Applications[pId].V3]_co_ scene)_sm__lt_br /_gt_\n\t                    myLines.color _eq_ linesColor1_sm__lt_br /_gt_\n\t                }_lt_br /_gt_\n\t            }_lt_br /_gt_\n\t            for (var key in displayModel.ConsumingRelations) {_lt_br /_gt_\n\t                if (displayModel.ConsumingRelations.hasOwnProperty(key)) {_lt_br /_gt_\n\t                    var idA _eq_ displayModel.ConsumingRelations[key].ConsumerId_sm__lt_br /_gt_\n\t                    var idS _eq_ displayModel.ConsumingRelations[key].ServiceId_sm__lt_br /_gt_\n\t                    var myLines _eq_ BABYLON.Mesh.CreateLines(_qt_a_qt__co_ [displayModel.Services[idS].V3_co_ displayModel.Applications[idA].V3]_co_ scene)_sm__lt_br /_gt_\n\t                }_lt_br /_gt_\n\t            }_lt_br /_gt_\n\t            return scene_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t    &lt_sm_/script&gt_sm__lt_br /_gt_\n\t    &lt_sm_div id_eq__qt_bts_qt_ style_eq__qt_color_dd_#0000FF_qt_&gt_sm__lt_br /_gt_\n\t        &lt_sm_span&gt_sm__lt_br /_gt_\n\t            &lt_sm_input id_eq__qt_9999_qt_ style_eq__qt_background-color_dd_ #4CAF50_sm_ width_dd_ 30%_qt_ type_eq__qt_file_qt_ name_eq__qt_archimateFile_qt_ onchange_eq__qt_myUpload()_qt_&gt_sm__lt_br /_gt_\n\t            &lt_sm_span id_eq__qt_uuid_qt_&gt_sm_...&lt_sm_/span&gt_sm__lt_br /_gt_\n\t        &lt_sm_/span&gt_sm__lt_br /_gt_\n\t        &lt_sm_button id_eq__qt_2D_qt_ class_eq__qt_button_qt_ style_eq__qt_background-color_dd_ #BCAC00_qt_ name_eq__qt_render2_qt_ onclick_eq__qt_renderFile()_qt_&gt_sm_SHOW 2D&lt_sm_/button&gt_sm__lt_br /_gt_\n\t        &lt_sm_button id_eq__qt_25D_qt_ class_eq__qt_button_qt_ style_eq__qt_background-color_dd_ #1387F5_qt_ name_eq__qt_render25_qt_ onclick_eq__qt_renderFile25D()_qt_&gt_sm_SHOW 2_co_5D&lt_sm_/button&gt_sm__lt_br /_gt_\n\t        &lt_sm_button id_eq__qt_3D_qt_ class_eq__qt_button_qt_ style_eq__qt_background-color_dd_ #E70000_qt_ name_eq__qt_render3_qt_ onclick_eq__qt_renderFile()_qt_&gt_sm_SHOW 3D&lt_sm_/button&gt_sm__lt_br /_gt_\n\t        &lt_sm_button id_eq__qt_DEMO_qt_ class_eq__qt_button_qt_ style_eq__qt_background-color_dd_ #D490B8_sm_ color_dd_ black_qt_ name_eq__qt_demo_qt_ onclick_eq__qt_renderDemo()_qt_&gt_sm_SoaScape Demo&lt_sm_/button&gt_sm__lt_br /_gt_\n\t        &lt_sm_button id_eq__qt_DEMO_qt_ class_eq__qt_button_qt_ style_eq__qt_background-color_dd_ #D4CE90_sm_ color_dd_ black_qt_ name_eq__qt_demo_qt_ onclick_eq__qt_renderApiTest()_qt_&gt_sm_API Test&lt_sm_/button&gt_sm__lt_br /_gt_\n\t        &lt_sm_button id_eq__qt_DEMO_qt_ class_eq__qt_button_qt_ style_eq__qt_background-color_dd_ #90D4AC_sm_ color_dd_ black_qt_ name_eq__qt_demo_qt_ onclick_eq__qt_renderBuiltIn()_qt_&gt_sm_Built in data&lt_sm_/button&gt_sm__lt_br /_gt_\n\t    &lt_sm_/div&gt_sm__lt_br /_gt_\n\t    &lt_sm_div&gt_sm__lt_br /_gt_\n\t        &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm__lt_br /_gt_\n\t    &lt_sm_/div&gt_sm__lt_br /_gt_\n\t&lt_sm_/body&gt_sm__lt_br /_gt_\n\t&lt_sm_/html&gt_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2017-06-23T15_dd_25_dd_01Z_t_ title_eq__t_06/23/2017 03_dd_25  PM_t_ data-short_eq__t_1 yr_t__gt_June 23_co_ 2017_lt_/time_gt_ by Borjan_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_code uploading failed with -200\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-23T16:08:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit is tough to help without a repro. Do you mind creating one on playground.babylonjs.com ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-06-24T16:03:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_179417_qt_ data-ipsquote-contentid_eq__qt_31228_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1498234110_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t23 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello !\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tit is tough to help without a repro. Do you mind creating one on playground.babylonjs.com ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_ve added a playground_co_ see_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index2_5.html#CAVBUX%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index2_5.html#CAVBUX#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe problem is the line 17_co_ scene.dispose() - here commented.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-06-24T16:28:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think you should be disposing the meshes instead of the whole scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index2_5.html#CAVBUX%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index2_5.html#CAVBUX#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-06-24T16:54:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_179519_qt_ data-ipsquote-contentid_eq__qt_31228_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1498321698_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 minutes ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI think you should be disposing the meshes instead of the whole scene.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index2_5.html#CAVBUX%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index2_5.html#CAVBUX#4_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you Adam_co_ I_t_ve tested it and it solves most of the problem. However_co_ the memory continues growing (not by 50 MB_co_ but by some 10-15 MB). It seems to me that some other resources could be disposed too.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]