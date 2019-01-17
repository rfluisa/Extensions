[{"Owner":"BMWPilote","Date":"2018-08-03T06:47:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf we use post process (such as SSAO)_co_ we might want to render directly the depth and the normal when doing the main pass. Then we can avoid doing another pass by GeometryBufferRenderer. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know that we don_t_t support the feature with built-in shaders. My question is if I use my own shaders. Is it feasible in the current Babylon code base? I can overwrite Babylon_t_s built-in classes if needed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BMWPilote","Date":"2018-08-03T09:17:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI found this (_lt_a href_eq__qt_https_dd_//hacks.mozilla.org/2014/01/webgl-deferred-shading/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//hacks.mozilla.org/2014/01/webgl-deferred-shading/_lt_/a_gt_). But it seems that this works only with WebGL1.0 + extension. How can it work with WebGL2.0?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible to overwrite the below function so that I can inject the _qt_MRT stuff_qt_? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/cb2c6ebb583fabd07a03a2cbf6a95b43990f902a/src/Engine/babylon.engine.ts#L2394_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/cb2c6ebb583fabd07a03a2cbf6a95b43990f902a/src/Engine/babylon.engine.ts#L2394_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother way I am thinking is that if I write a class which inherit PostProcess and I override the activate function. Instead of creating a RenderTargetTexture_co_ I can create a MultiRenderTargetTexutre. Is it feasible though?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/48b475ce095aa72e51eb31b89a624fcccd399950/src/PostProcess/babylon.postProcess.ts#L433_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/48b475ce095aa72e51eb31b89a624fcccd399950/src/PostProcess/babylon.postProcess.ts#L433_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI really need this because performance is the first priority in my project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks you in advance.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-03T15:26:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo you can have a look at how SSAO2 works_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/PostProcess/RenderPipeline/Pipelines/babylon.ssao2RenderingPipeline.ts_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/PostProcess/RenderPipeline/Pipelines/babylon.ssao2RenderingPipeline.ts_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is using MRT and the GeometryBuffer to do multiple render at once.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to create your own postprocess_co_ this is the code you should get inspiration from\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BMWPilote","Date":"2018-08-04T00:38:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_224071_qt_ data-ipsquote-contentid_eq__qt_39244_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1533309975_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSo you can have a look at how SSAO2 works_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/PostProcess/RenderPipeline/Pipelines/babylon.ssao2RenderingPipeline.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/PostProcess/RenderPipeline/Pipelines/babylon.ssao2RenderingPipeline.ts_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIt is using MRT and the GeometryBuffer to do multiple render at once.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you want to create your own postprocess_co_ this is the code you should get inspiration from\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI don’t want to create any Post process. I just want to have color depth and normal in one pass instead of two.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-06T15:59:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes but to do that you have to change the material shader (And thus you have to use your own one  as the Standard and PRB material won_t_t support it)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BMWPilote","Date":"2018-08-08T02:09:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_224270_qt_ data-ipsquote-contentid_eq__qt_39244_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1533571150_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 8/6/2018 at 11_dd_59 PM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYes but to do that you have to change the material shader (And thus you have to use your own one  as the Standard and PRB material won_t_t support it)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ I know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I modified the shader as below.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    gl_FragData[0] _eq_ finalColor_sm_\n\n#if defined(ID_BUFFER)\n    #if defined(PACK_ID)\n        gl_FragData[1] _eq_ dbId_modelId_sm_\n    #else\n        gl_FragData[1] _eq_ vec4(dbId_co_ modelId_co_ 0.0_co_ 1.0)_sm_\n    #endif\n#endif\n\n#ifndef ALPHABLEND\n    #ifdef LOGARITHMICDEPTH\n        gl_FragData[DEPTH_INDEX] _eq_ vec4(vDepthMetric_co_ log2(vFragmentDepth) * logarithmicDepthConstant * 0.5_co_ vViewPos.z_co_ 1.0)_sm_\n    #else\n        gl_FragData[DEPTH_INDEX] _eq_ vec4(vDepthMetric_co_ gl_FragCoord.z_co_ vViewPos.z_co_ 1.0)_sm_\n    #endif\n\n    gl_FragData[DEPTH_INDEX + 1] _eq_ vec4(normalize(vNormalV)_co_ 1.0)_sm_\n#endif_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd I wrote a MRTPostProcess\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import * as BABYLON from _t_babylonjs_t__sm_\nexport class MRTPostProcess extends BABYLON.PostProcess {\n\n    private _textureCount_dd_ number_sm_\n    private _externalTextures_dd_ BABYLON.Texture[]_sm_\n\n    constructor(name_dd_ string_co_ textureCount_dd_ number_co_ fragmentUrl_dd_ string_co_ parameters_dd_ BABYLON.Nullable&lt_sm_string[]&gt_sm__co_ samplers_dd_ BABYLON.Nullable&lt_sm_string[]&gt_sm__co_ options_dd_ number | BABYLON.PostProcessOptions_co_ camera_dd_ BABYLON.Nullable&lt_sm_BABYLON.Camera&gt_sm__co_\n        samplingMode_dd_ number _eq_ BABYLON.Texture.NEAREST_SAMPLINGMODE_co_ engine?_dd_ BABYLON.Engine_co_ reusable?_dd_ boolean_co_ defines_dd_ BABYLON.Nullable&lt_sm_string&gt_sm_ _eq_ null_co_ textureType_dd_ number _eq_ BABYLON.Engine.TEXTURETYPE_UNSIGNED_INT_co_ vertexUrl_dd_ string _eq_ _qt_postprocess_qt__co_ indexParameters?_dd_ any_co_ blockCompilation _eq_ false) {\n\n        super(name_co_ fragmentUrl_co_ parameters_co_ samplers_co_ options_co_ camera_co_ samplingMode_co_ engine_co_ reusable_co_ defines_co_ textureType_co_ vertexUrl_co_ indexParameters_co_ blockCompilation)_sm_\n        this._textureCount _eq_ textureCount_sm_\n\n        this.onAfterRenderObservable.add(() _eq_&gt_sm_ {\n            this.unbindFrameBuffer(engine)_sm_\n        })_sm_\n    }\n\n    get textures()_dd_ BABYLON.SmartArray&lt_sm_BABYLON.InternalTexture&gt_sm_ {\n        return this._textures_sm_\n    }\n\n    get externalTextures()_dd_ BABYLON.Texture[] {\n        return this._externalTextures_sm_\n    }\n\n    private _createExternalTextures(scene_dd_ BABYLON.Scene)_dd_ void {\n        this._externalTextures _eq_ []_sm_\n        for (var i _eq_ 0_sm_ i &lt_sm_ this._textureCount_sm_ i++) {\n            var texture _eq_ new BABYLON.Texture(null_co_ scene_co_ false_co_ false_co_ this.renderTargetSamplingMode)_sm_\n            texture._texture _eq_ this._textures.data[i]_sm_\n            this._externalTextures.push(texture)_sm_\n        }\n    }\n\n    activate(camera_dd_ BABYLON.Nullable&lt_sm_BABYLON.Camera&gt_sm__co_ sourceTexture_dd_ BABYLON.Nullable&lt_sm_BABYLON.InternalTexture&gt_sm_ _eq_ null_co_ forceDepthStencil?_dd_ boolean)_dd_ BABYLON.InternalTexture {\n        camera _eq_ camera || this._camera_sm_\n\n        var scene _eq_ camera.getScene()_sm_\n        var engine _eq_ scene.getEngine()_sm_\n        var maxSize _eq_ engine.getCaps().maxTextureSize_sm_\n\n        var requiredWidth _eq_ ((sourceTexture ? sourceTexture.width _dd_ this._engine.getRenderWidth(true)) * &lt_sm_number&gt_sm_this._options) | 0_sm_\n        var requiredHeight _eq_ ((sourceTexture ? sourceTexture.height _dd_ this._engine.getRenderHeight(true)) * &lt_sm_number&gt_sm_this._options) | 0_sm_\n\n        // If rendering to a webvr camera_t_s left or right eye only half the width should be used to avoid resize when rendered to screen\n        var webVRCamera _eq_ (&lt_sm_BABYLON.WebVRFreeCamera&gt_sm_camera.parent)_sm_\n        if (webVRCamera &amp_sm_&amp_sm_ (webVRCamera.leftCamera _eq__eq_ camera || webVRCamera.rightCamera _eq__eq_ camera)) {\n            requiredWidth /_eq_ 2_sm_\n        }\n\n        var desiredWidth _eq_ ((&lt_sm_BABYLON.PostProcessOptions&gt_sm_this._options).width || requiredWidth)_sm_\n        var desiredHeight _eq_ (&lt_sm_BABYLON.PostProcessOptions&gt_sm_this._options).height || requiredHeight_sm_\n\n        if (!this._shareOutputWithPostProcess &amp_sm_&amp_sm_ !this._forcedOutputTexture) {\n\n            if (this.adaptScaleToCurrentViewport) {\n                let currentViewport _eq_ engine.currentViewport_sm_\n\n                if (currentViewport) {\n                    desiredWidth *_eq_ currentViewport.width_sm_\n                    desiredHeight *_eq_ currentViewport.height_sm_\n                }\n            }\n\n            if (this.renderTargetSamplingMode _eq__eq__eq_ BABYLON.Texture.TRILINEAR_SAMPLINGMODE || this.alwaysForcePOT) {\n                if (!(&lt_sm_BABYLON.PostProcessOptions&gt_sm_this._options).width) {\n                    desiredWidth _eq_ engine.needPOTTextures ? BABYLON.Tools.GetExponentOfTwo(desiredWidth_co_ maxSize_co_ this.scaleMode) _dd_ desiredWidth_sm_\n                }\n\n                if (!(&lt_sm_BABYLON.PostProcessOptions&gt_sm_this._options).height) {\n                    desiredHeight _eq_ engine.needPOTTextures ? BABYLON.Tools.GetExponentOfTwo(desiredHeight_co_ maxSize_co_ this.scaleMode) _dd_ desiredHeight_sm_\n                }\n            }\n\n            if (this.width !_eq__eq_ desiredWidth || this.height !_eq__eq_ desiredHeight) {\n                if (this._textures.length &gt_sm_ 0) {\n                    for (var i _eq_ 0_sm_ i &lt_sm_ this._textures.length_sm_ i++) {\n                        this._engine._releaseTexture(this._textures.data[i])_sm_\n                    }\n                    this._textures.reset()_sm_\n                }\n                this.width _eq_ desiredWidth_sm_\n                this.height _eq_ desiredHeight_sm_\n\n                let textureSize _eq_ { width_dd_ this.width_co_ height_dd_ this.height }_sm_\n                var types _eq_ []_sm_\n                var samplingModes _eq_ []_sm_\n                for (var i _eq_ 0_sm_ i &lt_sm_ this._textureCount_sm_ i++) {\n                    types.push(this._textureType)_sm_\n                    samplingModes.push(this.renderTargetSamplingMode)_sm_\n                }\n                let textureOptions _eq_ {\n                    generateMipMaps_dd_ false_co_\n                    generateDepthBuffer_dd_ forceDepthStencil || camera._postProcesses.indexOf(this) _eq__eq__eq_ 0_co_\n                    generateStencilBuffer_dd_ (forceDepthStencil || camera._postProcesses.indexOf(this) _eq__eq__eq_ 0) &amp_sm_&amp_sm_ this._engine.isStencilEnable_co_\n                    samplingModes_dd_ samplingModes_co_\n                    types_dd_ types_co_\n                    textureCount_dd_ this._textureCount\n                }_sm_\n\n                this._textures.concat(this._engine.createMultipleRenderTarget(textureSize_co_ textureOptions))_sm_\n                this._createExternalTextures(scene)_sm_\n\n                if (this._reusable) {\n                    this._textures.concat(this._engine.createMultipleRenderTarget(textureSize_co_ textureOptions))_sm_\n                }\n\n                this._texelSize.copyFromFloats(1.0 / this.width_co_ 1.0 / this.height)_sm_\n\n                this.onSizeChangedObservable.notifyObservers(this)_sm_\n            }\n\n            this._textures.forEach(texture _eq_&gt_sm_ {\n                if (texture.samples !_eq__eq_ this.samples) {\n                    this._engine.updateRenderTargetTextureSampleCount(texture_co_ this.samples)_sm_\n                }\n            })_sm_\n        }\n\n        var target_dd_ BABYLON.InternalTexture_sm_\n\n        if (this._shareOutputWithPostProcess) {\n            target _eq_ this._shareOutputWithPostProcess.inputTexture_sm_\n        } else if (this._forcedOutputTexture) {\n            target _eq_ this._forcedOutputTexture_sm_\n\n            this.width _eq_ this._forcedOutputTexture.width_sm_\n            this.height _eq_ this._forcedOutputTexture.height_sm_\n        } else {\n            target _eq_ this.inputTexture_sm_\n        }\n\n        // Bind the input of this post process to be used as the output of the previous post process.\n        if (this.enablePixelPerfectMode) {\n            this._scaleRatio.copyFromFloats(requiredWidth / desiredWidth_co_ requiredHeight / desiredHeight)_sm_\n            this._engine.bindFramebuffer(target_co_ 0_co_ requiredWidth_co_ requiredHeight_co_ true)_sm_\n        }\n        else {\n            this._scaleRatio.copyFromFloats(1_co_ 1)_sm_\n            this._engine.bindFramebuffer(target_co_ 0_co_ undefined_co_ undefined_co_ true)_sm_\n        }\n\n        this.onActivateObservable.notifyObservers(camera)_sm_\n\n        // Clear\n        if (this.autoClear &amp_sm_&amp_sm_ this.alphaMode _eq__eq__eq_ BABYLON.Engine.ALPHA_DISABLE) {\n            this._engine.clear(this.clearColor ? this.clearColor _dd_ scene.clearColor_co_ true_co_ true_co_ true)_sm_\n        }\n\n        if (this._reusable) {\n            this._currentRenderTextureInd _eq_ (this._currentRenderTextureInd + this._textureCount) % (this._textureCount + 1)_sm_\n        }\n        return target_sm_\n    }\n\n\n    unbindFrameBuffer(engine_dd_ BABYLON.Engine)_dd_ void {\n        let internalTextures_dd_ BABYLON.InternalTexture[] _eq_ []_sm_\n        for (var i _eq_ 0_sm_ i &lt_sm_ this._textureCount_sm_ i++) {\n            internalTextures.push(this._textures.data[i])_sm_\n        }\n        engine.unBindMultiColorAttachmentFramebuffer(internalTextures_co_ false_co_ () _eq_&gt_sm_ { })_sm_\n    }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems to work so far...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BMWPilote","Date":"2018-08-08T02:11:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere is one thing that I am still confused which is the _qt_reusable_qt_ flag. Although I don_t_t use it. I am not sure how to modify the code to adapt to MRT.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-08T02:54:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\treusable is mostly for postprocesses that are inside a pipeline and that needs to be reuse at different stage of that pipeline\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]