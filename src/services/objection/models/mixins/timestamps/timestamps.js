export const timestampsMixin = Model => {
  // The returned class should have no name. That way
  // the superclass's name gets inherited.
  return class extends Model {
    // Your modifications.
    $beforeInsert() {
      super.$beforeInsert();
      const dateNow = new Date().toISOString();
      this.created_at = dateNow;
      this.updated_at = dateNow;
    }

    $beforeUpdate() {
      super.$beforeUpdate();
      this.updated_at = new Date().toISOString();
    }
  };
};
