import React from "react";
import { useQuery } from "@tanstack/react-query";
import ApiService from "./service/api-service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Download = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["download", id],
    queryFn: () =>
      ApiService.fetching(`video/details?videoId=${id}&&audios=true`),
    refetchOnWindowFocus: false,
  });
  if (isError) {
    <h3>{error.message}</h3>;
  }
  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="bg-transparent">
          <div className="flex flex-col ">
            <div className=" overflow-x-auto">
              <div className="p-1.5 inline-block align-middle">
                <div className="overflow-hidden">
                  <table className=" ">
                    <tbody>
                      {data?.videos?.items?.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {item?.quality}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {item?.sizeText}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <Link
                              to={item?.url}
                              className="inline-flex text-white bg-green-700 rounded- px-2 py-1 items-center gap-x-2 text-sm font-semibold rounded-lg "
                            >
                              Download
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Download;
