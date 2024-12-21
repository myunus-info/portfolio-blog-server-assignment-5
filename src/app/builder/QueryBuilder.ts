import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public queryModel: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(queryModel: Query<T[], T>, query: Record<string, unknown>) {
    this.queryModel = queryModel;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const search = this?.query?.search;
    if (search) {
      this.queryModel = this.queryModel.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: search, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }
    return this;
  }

  filter() {
    const queryObj = { ...this.query };
    const excludeFields = ['search', 'sortBy', 'sortOrder'];
    excludeFields.forEach((el) => delete queryObj[el]);
    this.queryModel = this.queryModel.find(queryObj as FilterQuery<T>);

    return this;
  }

  sort() {
    const sortBy = this?.query?.sortBy as string;
    if (sortBy) {
      const sortOrder = this.query.sortOrder === 'desc' ? -1 : 1;
      this.queryModel = this.queryModel.sort({ [sortBy]: sortOrder });
    }
    return this;
  }
}

export default QueryBuilder;
