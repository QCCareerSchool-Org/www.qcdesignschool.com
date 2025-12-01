declare module '*.svg' {
  // const React = import('react');

  interface IconProps extends React.SVGProps<SVGSVGElement> {
    title?: string;

    // Clipboard Events
    onCopy?: React.ClipboardEventHandler<T> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<T> | undefined;
    onCut?: React.ClipboardEventHandler<T> | undefined;
    onCutCapture?: React.ClipboardEventHandler<T> | undefined;
    onPaste?: React.ClipboardEventHandler<T> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<T> | undefined;

    // Composition Events
    onCompositionEnd?: React.CompositionEventHandler<T> | undefined;
    onCompositionEndCapture?: React.CompositionEventHandler<T> | undefined;
    onCompositionStart?: React.CompositionEventHandler<T> | undefined;
    onCompositionStartCapture?: React.CompositionEventHandler<T> | undefined;
    onCompositionUpdate?: React.CompositionEventHandler<T> | undefined;
    onCompositionUpdateCapture?: React.CompositionEventHandler<T> | undefined;

    // Focus Events
    onFocus?: React.FocusEventHandler<T> | undefined;
    onFocusCapture?: React.FocusEventHandler<T> | undefined;
    onBlur?: React.FocusEventHandler<T> | undefined;
    onBlurCapture?: React.FocusEventHandler<T> | undefined;

    // Image Events
    onLoad?: React.ReactEventHandler<T> | undefined;
    onLoadCapture?: React.ReactEventHandler<T> | undefined;
    onError?: React.ReactEventHandler<T> | undefined; // also a Media Event
    onErrorCapture?: React.ReactEventHandler<T> | undefined; // also a Media Event

    // MouseEvents
    onAuxClick?: React.MouseEventHandler<T> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<T> | undefined;
    onClick?: React.MouseEventHandler<T> | undefined;
    onClickCapture?: React.MouseEventHandler<T> | undefined;
    onContextMenu?: React.MouseEventHandler<T> | undefined;
    onContextMenuCapture?: React.MouseEventHandler<T> | undefined;
    onDoubleClick?: React.MouseEventHandler<T> | undefined;
    onDoubleClickCapture?: React.MouseEventHandler<T> | undefined;
    onDrag?: React.DragEventHandler<T> | undefined;
    onDragCapture?: React.DragEventHandler<T> | undefined;
    onDragEnd?: React.DragEventHandler<T> | undefined;
    onDragEndCapture?: React.DragEventHandler<T> | undefined;
    onDragEnter?: React.DragEventHandler<T> | undefined;
    onDragEnterCapture?: React.DragEventHandler<T> | undefined;
    onDragExit?: React.DragEventHandler<T> | undefined;
    onDragExitCapture?: React.DragEventHandler<T> | undefined;
    onDragLeave?: React.DragEventHandler<T> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<T> | undefined;
    onDragOver?: React.DragEventHandler<T> | undefined;
    onDragOverCapture?: React.DragEventHandler<T> | undefined;
    onDragStart?: React.DragEventHandler<T> | undefined;
    onDragStartCapture?: React.DragEventHandler<T> | undefined;
    onDrop?: React.DragEventHandler<T> | undefined;
    onDropCapture?: React.DragEventHandler<T> | undefined;
    onMouseDown?: React.MouseEventHandler<T> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<T> | undefined;
    onMouseEnter?: React.MouseEventHandler<T> | undefined;
    onMouseLeave?: React.MouseEventHandler<T> | undefined;
    onMouseMove?: React.MouseEventHandler<T> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<T> | undefined;
    onMouseOut?: React.MouseEventHandler<T> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<T> | undefined;
    onMouseOver?: React.MouseEventHandler<T> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<T> | undefined;
    onMouseUp?: React.MouseEventHandler<T> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<T> | undefined;

    // Selection Events
    onSelect?: React.ReactEventHandler<T> | undefined;
    onSelectCapture?: React.ReactEventHandler<T> | undefined;

    // Touch Events
    onTouchCancel?: React.TouchEventHandler<T> | undefined;
    onTouchCancelCapture?: React.TouchEventHandler<T> | undefined;
    onTouchEnd?: React.TouchEventHandler<T> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<T> | undefined;
    onTouchMove?: React.TouchEventHandler<T> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<T> | undefined;
    onTouchStart?: React.TouchEventHandler<T> | undefined;
    onTouchStartCapture?: React.TouchEventHandler<T> | undefined;

    // Pointer Events
    onPointerDown?: React.PointerEventHandler<T> | undefined;
    onPointerDownCapture?: React.PointerEventHandler<T> | undefined;
    onPointerMove?: React.PointerEventHandler<T> | undefined;
    onPointerMoveCapture?: React.PointerEventHandler<T> | undefined;
    onPointerUp?: React.PointerEventHandler<T> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<T> | undefined;
    onPointerCancel?: React.PointerEventHandler<T> | undefined;
    onPointerCancelCapture?: React.PointerEventHandler<T> | undefined;
    onPointerEnter?: React.PointerEventHandler<T> | undefined;
    onPointerLeave?: React.PointerEventHandler<T> | undefined;
    onPointerOver?: React.PointerEventHandler<T> | undefined;
    onPointerOverCapture?: React.PointerEventHandler<T> | undefined;
    onPointerOut?: React.PointerEventHandler<T> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<T> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<T> | undefined;
    onGotPointerCaptureCapture?: React.PointerEventHandler<T> | undefined;
    onLostPointerCapture?: React.PointerEventHandler<T> | undefined;
    onLostPointerCaptureCapture?: React.PointerEventHandler<T> | undefined;

    // Animation Events
    onAnimationStart?: React.AnimationEventHandler<T> | undefined;
    onAnimationStartCapture?: React.AnimationEventHandler<T> | undefined;
    onAnimationEnd?: React.AnimationEventHandler<T> | undefined;
    onAnimationEndCapture?: React.AnimationEventHandler<T> | undefined;
    onAnimationIteration?: React.AnimationEventHandler<T> | undefined;
    onAnimationIterationCapture?: React.AnimationEventHandler<T> | undefined;

    // Transition Events
    onTransitionCancel?: React.TransitionEventHandler<T> | undefined;
    onTransitionCancelCapture?: React.TransitionEventHandler<T> | undefined;
    onTransitionEnd?: React.TransitionEventHandler<T> | undefined;
    onTransitionEndCapture?: React.TransitionEventHandler<T> | undefined;
    onTransitionRun?: React.TransitionEventHandler<T> | undefined;
    onTransitionRunCapture?: React.TransitionEventHandler<T> | undefined;
    onTransitionStart?: React.TransitionEventHandler<T> | undefined;
    onTransitionStartCapture?: React.TransitionEventHandler<T> | undefined;
  }

  const content: React.FC<IconProps>;

  export default content;
}
