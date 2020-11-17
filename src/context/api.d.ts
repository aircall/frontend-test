declare namespace Components {
  namespace Parameters {
    namespace ActivityId {
      export type Id = Schemas.ActivityId; // int64
    }
  }
  namespace Schemas {
    export type Activities = Activity[];
    /**
     * An inbound or outbound call activity.
     */
    export interface Activity {
      id: ActivityId; // int64
      /**
       * Creation date of the activity in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
       */
      readonly created_at: string; // date-time
      /**
       * Inbound or Outbound call activity.
       */
      readonly direction: 'inbound' | 'outbound';
      /**
       * Person who called, name or phone number.
       */
      readonly from: string;
      /**
       * Person who was called, name or phone number.
       */
      readonly to: string;
      /**
       * Name of the phoning plateform used.
       */
      readonly via: string;
      /**
       * Activity duration in seconds.
       */
      readonly duration: string;
      is_archived: ActivityIsArchived;
      /**
       * Type of call activity.
       */
      readonly call_type: 'answered' | 'missed' | 'voicemail';
    }
    /**
     * An activity Identifier.
     * example:
     * 7834
     */
    export type ActivityId = number; // int64
    /**
     * Is this activity archived.
     */
    export type ActivityIsArchived = boolean;
  }
}
declare namespace Paths {
  namespace ArchiveActivity {
    export type RequestBody = Components.Schemas.Activity;
    namespace Responses {
      export type $200 = Components.Schemas.Activity;
    }
  }
  namespace GetActivities {
    namespace Responses {
      export type $200 = Components.Schemas.Activities;
    }
  }
  namespace GetActivity {
    namespace Responses {
      export type $200 = Components.Schemas.Activity;
    }
  }
  namespace Reset {
    namespace Responses {
      export interface $200 {
        message: 'done';
      }
    }
  }
}
export = Components;
