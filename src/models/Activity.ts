import * as t from "io-ts";

export const Activity = t.exact(
  t.type({
    id: t.number,
    created_at: t.string,
    direction: t.union([t.literal("outbound"), t.literal("inbound")]),
    from: t.string,
    to: t.union([t.null, t.string]),
    via: t.string,
    duration: t.string,
    is_archived: t.boolean,
    call_type: t.union([
      t.literal("missed"),
      t.literal("answered"),
      t.literal("voicemail")
    ])
  })
);

export type Activity = t.TypeOf<typeof Activity>;
