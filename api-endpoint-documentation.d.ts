/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   api-endpoint-documentation.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/elements/dom-if.d.ts" />
/// <reference path="../polymer/types/lib/elements/dom-repeat.d.ts" />
/// <reference path="../polymer/types/lib/utils/render-status.d.ts" />
/// <reference path="../raml-aware/raml-aware.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../api-annotation-document/api-annotation-document.d.ts" />
/// <reference path="../api-parameters-document/api-parameters-document.d.ts" />
/// <reference path="../api-method-documentation/api-method-documentation.d.ts" />
/// <reference path="../markdown-styles/markdown-styles.d.ts" />
/// <reference path="../marked-element/marked-element.d.ts" />
/// <reference path="../amf-helper-mixin/amf-helper-mixin.d.ts" />
/// <reference path="../clipboard-copy/clipboard-copy.d.ts" />

declare namespace ApiElements {

  /**
   * `api-endpoint-documentation`
   *
   * A component to generate documentation for an endpoint from AMF model
   *
   * This element works with [AMF](https://github.com/mulesoft/amf) data model.
   * To properly compute all the information relevant to endpoint documentation
   * set the following properties:
   *
   * - amfModel - as AMF's WebApi data model
   * - endpoint - As AMF's EndPoint data model
   *
   * When set, this will automatically populate the wiew with data.
   *
   * ## Updating API's base URI
   *
   * By default the component render the documentation as it is defined
   * in the AMF model. Sometimes, however, you may need to replace the base URI
   * of the API with something else. It is useful when the API does not
   * have base URI property defined (therefore this component render relative
   * paths instead of URIs) or when you want to manage different environments.
   *
   * To update base URI value either update `baseUri` property or use
   * `iron-meta` with key `ApiBaseUri`. First method is easier but the second
   * gives much more flexibility since it use a [monostate pattern](http://wiki.c2.com/?MonostatePattern)
   * to manage base URI property.
   *
   * When the component constructs the funal URI for the endpoint it does the following:
   * - if `baseUri` is set it uses this value as a base uri for the endpoint
   * - else if `iron-meta` with key `ApiBaseUri` exists and contains a value
   * it uses it uses this value as a base uri for the endpoint
   * - else if `amfModel` is set then it computes base uri value from main
   * model document
   * Then it concatenates computed base URI with `endpoint`'s path property.
   *
   * ### Example
   *
   * ```html
   * <iron-meta key="ApiBaseUri" value="https://domain.com"></iron-meta>
   * ```
   *
   * To update value of the `iron-meta`:
   * ```javascript
   * new Polymer.IronMeta({key: 'ApiBaseUri'}).value = 'https://other.domain';
   * ```
   *
   * Note: The element will not get notified about the change in `iron-meta`.
   * The change will be reflected whehn `amfModel` or `endpoint` property chnage.
   *
   * ## Styling
   *
   * `<api-endpoint-documentation>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--api-endpoint-documentation` | Mixin applied to this elment | `{}`
   * `--arc-font-headline` | Theme mixin, Applied to h1 element (title) | `{}`
   * `--arc-font-code1` | Theme mixin, applied to the URL area | `{}`
   * `--api-endpoint-documentation-url-font-size` | Font size of endpoin URL | `16px`
   * `--api-endpoint-documentation-url-background-color` | Background color of the URL section | `#424242`
   * `--api-endpoint-documentation-url-font-color` | Font color of the URL area | `#fff`
   * `--api-endpoint-documentation-bottom-navigation-border-color` | Color of the top border of the bottom navigartion | `#546E7A`
   * `--api-endpoint-documentation-bottom-navigation-color` | Color of of the bottom navigartion (icon + text) | `#546E7A`
   */
  class ApiEndpointDocumentation extends
    ApiElements.AmfHelperMixin(
    Polymer.Element) {

    /**
     * Generated AMF json/ld model form the API spec.
     * The element assumes the object of the first array item to be a
     * type of `"http://raml.org/vocabularies/document#Document`
     * on AMF vocabulary.
     *
     * It is only usefult for the element to resolve references.
     */
    amfModel: object|any[]|null;

    /**
     * `raml-aware` scope property to use.
     */
    aware: string|null|undefined;

    /**
     * Method's endpoint definition as a
     * `http://raml.org/vocabularies/http#endpoint` of AMF model.
     */
    endpoint: object|null|undefined;

    /**
     * The ID in `amfModel` of current selection. It can be this endpoint
     * or any of methods
     */
    selected: string|null|undefined;

    /**
     * A property to set to override AMF's model base URI information.
     * When this property is set, the `endpointUri` property is recalculated.
     */
    baseUri: string|null|undefined;

    /**
     * Endpoint name.
     * It should be either a "displayName" or endpoint's relative
     * path.
     */
    readonly endpointName: string|null|undefined;

    /**
     * Computed value of method description from `method` property.
     */
    readonly description: string|null|undefined;

    /**
     * Computed value of endpoint's path.
     */
    readonly path: string|null|undefined;

    /**
     * Computed value from current `method`. True if the model contains
     * custom properties (annotations in RAML).
     */
    readonly hasCustomProperties: boolean|null|undefined;

    /**
     * Computed value of AMF security definition from `method`
     * property.
     */
    readonly security: object|null|undefined;

    /**
     * Computed value, true if `security` has values.
     */
    readonly hasSecurity: boolean|null|undefined;

    /**
     * If set it will renders the view in the narrow layout.
     */
    narrow: boolean|null|undefined;

    /**
     * List of traits and resource types, if any.
     */
    readonly extendsTypes: Array<object|null>|null;

    /**
     * Computed value of a parent type.
     * In RAML it is resource type that can be applied to a resource.
     */
    readonly parentType: object|null|undefined;

    /**
     * Computed value, true if `parentType` has a value.
     */
    readonly hasParentType: boolean|null|undefined;

    /**
     * Computed value for parent type name.
     */
    readonly parentTypeName: string|null|undefined;

    /**
     * List of traits appied to this endpoint
     */
    readonly traits: Array<object|null>|null;

    /**
     * Computed value, true if the endpoint has traits.
     */
    readonly hasTraits: boolean|null|undefined;

    /**
     * True if the endpoint is extended by either traits or resource type.
     */
    readonly hasExtension: boolean|null|undefined;

    /**
     * A list of AMF's supported operations (HTTP methods) in this
     * endpoint
     */
    readonly operations: any[]|null|undefined;

    /**
     * Model to generate a link to previous HTTP endpoint.
     * It should contain `id` and `label` properties
     */
    previous: object|null|undefined;

    /**
     * Computed value, true if `previous` is set
     */
    readonly hasPreviousLink: boolean|null|undefined;

    /**
     * Model to generate a link to next HTTP endpoint.
     * It should contain `id` and `label` properties
     */
    next: object|null|undefined;

    /**
     * Computed value, true if `next` is set
     */
    readonly hasNextLink: boolean|null|undefined;

    /**
     * Computed value, true to render bottom navigation
     */
    readonly hasPagination: boolean|null|undefined;

    /**
     * Scroll target used to observe `scroll` event.
     * When set the element will observe scroll and inform other components
     * about changes in navigation while scrolling through methods list.
     * The navigation event contains `passive: true` property that
     * determines that it's not user triggered navigation but rather
     * context enforced.
     */
    scrollTarget: object|null|undefined;

    /**
     * Passing value of `noTryIt` to the method documentation.
     * Hiddes "Try it" button from the view.
     */
    noTryIt: boolean|null|undefined;

    /**
     * Computes method's endpoint name.
     * It looks for `http://schema.org/name` in the endpoint definition and
     * if not found it uses path as name.
     *
     * @param endpoint Endpoint model.
     * @returns Endpoint name.
     */
    _computeEndpointName(endpoint: object|null): String|null;

    /**
     * Computes value of `path` property
     *
     * @param endpoint Endpoint model.
     */
    _computePath(endpoint: object|null): String|null;

    /**
     * Computes `ectendsTypes`
     *
     * @param shape AMF shape to get `#extends` model
     */
    _computeExtendsTypes(shape: object|null): Array<object|null>|null|undefined;

    /**
     * Computes parent type as RAML's resource type.
     *
     * @param types Current value of `extendsTypes`
     */
    _computeParentType(types: Array<object|null>|null): object|null|undefined;

    /**
     * Computes value for `hasParentType` property
     *
     * @param type Parent resource type.
     */
    _computeHasParentType(type: object|null): Boolean|null;

    /**
     * Computes vaolue for `parentTypeName`
     *
     * @param type Parent type shape
     */
    _computeParentTypeName(type: object|null): String|null|undefined;

    /**
     * Computes value for `traits` property
     *
     * @param types Current value of `extendsTypes`
     */
    _computeTraits(types: Array<object|null>|null): Array<object|null>|null|undefined;

    /**
     * Computes name of a trait.
     *
     * @param trait AMF trait definition
     * @returns Trait name if defined.
     */
    _computeTraitName(trait: object|null): String|null|undefined;

    /**
     * Computes value for `hasExtension` property
     */
    _computeHasExtension(hasTraits: Boolean|null, hasParentType: Boolean|null): Boolean|null;

    /**
     * Computes list of operations for the endpoint.
     *
     * @param endpoint Endpoint model
     * @returns Operations if defined.
     */
    _computeOperations(endpoint: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `hasPagination` property
     */
    _computeHasNavigation(previous: Boolean|null, next: Boolean|null): Boolean|null;

    /**
     * Navigates to next method. Calls `_navigate` with id of previous item.
     */
    _navigatePrevious(): void;

    /**
     * Navigates to next method. Calls `_navigate` with id of next item.
     */
    _navigateNext(): void;

    /**
     * Dispatches `api-navigation-selection-changed` so other components
     * can update their state.
     */
    _navigate(id: String|null, type: String|null): void;
    _copyPathClipboard(e: any): void;

    /**
     * Handles scroll target chane and adds scroll event.
     *
     * @param st The scroll target.
     */
    _scrollTargetChanged(st: Node|null): void;

    /**
     * Scroll handler for `scrollTarget`.
     * It does not stall main thred by executing the action after nex render.
     */
    _scrollHandler(): void;

    /**
     * I hope this won't be required in final version :(
     */
    _checkMethodsPosition(): void;

    /**
     * Function that checks if an `element` is in the main scrolling area.
     *
     * @param heigth Height of the scroll target
     * @param dir Direction where the scroll is going (up or down)
     * @param element The node to test
     * @returns True when it determines that the element is in the main
     * scroll area,
     */
    _occupiesMainScrollArea(heigth: Number|null, dir: String|null, element: Node|null): Boolean|null;

    /**
     * Dispatches `api-navigation-selection-changed` custom event with
     * `passive: true` set on the detail object.
     * Listeners should not react on this event except for the ones that
     * should reflect passive navigation change.
     *
     * @param selected Id of selected method as in AMF model.
     */
    _notifyPassiveNavigation(selected: String|null): void;

    /**
     * Hadnler for either `selected` or `endpoint proerty change`
     *
     * @param selected Currently selected shape ID in AMF model
     * @param endpoint AMF model for the endpoint.
     */
    _selectedChanged(selected: String|null, endpoint: object|null): void;

    /**
     * Positions the method (operation) or endpoint (main title).
     *
     * @param id Selected AMF id.
     */
    _repositionVerb(id: String|null): void;
    _computeOperationId(item: any): any;
  }
}

interface HTMLElementTagNameMap {
  "api-endpoint-documentation": ApiElements.ApiEndpointDocumentation;
}
