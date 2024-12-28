# MongoDB $inc Operator Error
This example demonstrates an error that occurs when using the `$inc` operator in MongoDB with a field that is not of a numeric type (e.g., a string).  The `$inc` operator is designed to increment numeric values; using it with a string will cause a failure.

**How to reproduce:**

1. Create a MongoDB collection with a string field.
2. Try to increment that field using `$inc`.

**Solution:**

The solution involves ensuring that the target field is a numeric type (int, double, etc.) before using `$inc`.