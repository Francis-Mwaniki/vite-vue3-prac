<script setup></script>
<template>
  <main>
    <div
      class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm"
    >
      <div
        class="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex"
      >
        <div class="h-16 text-blue-500 flex items-center justify-center">
          <svg
            class="w-9"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 54 33"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          class="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4"
        >
          <router-link to="/about">
            <button
              class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-5"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </button>
          </router-link>
          <button
            class="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center bg-blue-100 text-blue-500"
          >
            <svg
              viewBox="0 0 24 24"
              class="h-5"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </button>
          <button
            class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              class="h-5"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
              ></path>
              <line x1="12" y1="11" x2="12" y2="17"></line>
              <line x1="9" y1="14" x2="15" y2="14"></line>
            </svg>
          </button>
          <button
            class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              class="h-5"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex-grow overflow-hidden h-full flex flex-col">
        <div
          class="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10"
        >
          <div class="ml-auto flex items-center space-x-7">
            <button class="flex items-center">
              <span class="relative flex-shrink-0">
                <img
                  class="w-7 h-7 rounded-full"
                  src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  alt="profile"
                />
                <span
                  class="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"
                ></span>
              </span>
              <span class="ml-2">Francis mwaniki</span>
              <svg
                viewBox="0 0 24 24"
                class="w-4 ml-1 flex-shrink-0"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex-grow flex overflow-x-hidden">
          <div
            class="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5"
          >
            <div class="text-xs text-gray-400 tracking-wider">USERS</div>
            <div class="relative mt-2">
              <input
                type="text"
                class="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm"
                placeholder="Search"
              />
              <svg
                viewBox="0 0 24 24"
                class="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div class="space-y-4 mt-3">
              <button
                class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow"
              >
                <div
                  class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
                    class="w-7 h-7 mr-2 rounded-full"
                    alt="profile"
                  />
                  Kathyrn Murphy
                </div>
                <div class="flex items-center w-full">
                  <div
                    class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md"
                  >
                    Design
                  </div>
                  <div class="ml-auto text-xs text-gray-500">$1,902.00</div>
                </div>
              </button>
            </div>
          </div>
          <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
            <div class="sm:p-7 p-4">
              <table class="w-full text-left">
                <thead>
                  <tr class="text-gray-400">
                    <th
                      class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                    >
                      Type
                    </th>
                    <th
                      class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                    >
                      Where
                    </th>
                    <th
                      class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell"
                    >
                      Description
                    </th>
                    <th
                      class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                    >
                      Amount
                    </th>
                    <th
                      class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 dark:text-gray-100">
                  <tr>
                    <td
                      class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800"
                    >
                      <div class="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          class="w-4 mr-5 text-yellow-500"
                          stroke="currentColor"
                          stroke-width="3"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Card
                      </div>
                    </td>
                    <td
                      class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800"
                    >
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512.001 512.001"
                          class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 dark:border-gray-800"
                        >
                          <path
                            fill="#03a9f4"
                            d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
                          />
                          <path
                            fill="#283593"
                            d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
                          />
                        </svg>
                        PayPal
                      </div>
                    </td>
                    <td
                      class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden"
                    >
                      Subscription renewal
                    </td>
                    <td
                      class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500"
                    >
                      - $120.00
                    </td>
                    <td
                      class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800"
                    >
                      <div class="flex items-center">
                        <div class="sm:flex hidden flex-col">
                          24.12.2020
                          <div class="text-gray-400 text-xs">11:16 AM</div>
                        </div>
                        <button
                          class="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            class="w-5"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
