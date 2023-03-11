export function assertEventTargetIsNode(
  eventTarget: EventTarget | null,
  hookName: string
): asserts eventTarget is Node {
  if (!eventTarget || !("nodeType" in eventTarget))
    throw new Error(`${hookName} hook expects a valid node element!`);
}
