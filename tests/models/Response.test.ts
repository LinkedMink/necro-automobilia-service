import { getResponseObject, ResponseStatus } from "../../src/models/IResponseData";

describe("response.ts", () => {
  test("getMessageObject should return standard empty response interface", () => {
    // Act
    const response = getResponseObject();

    // Assert
    expect(response.status).toEqual(ResponseStatus.Success);
    expect(response.data).toEqual(null);
  });
});
