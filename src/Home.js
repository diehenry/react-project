import React, { useState, useEffect } from 'react';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';
import { useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Home = (props) => {
	const [myData, setMyData] = useState([]);
	const data = useMemo(() => myData, [myData]);
	const columns = useMemo(
		() => [
			{
				Header: 'Column 1',
				accessor: 'col1', // accessor is the "key" in the data
			},
			{
				Header: 'Column 2',
				accessor: 'col2',
			},
			{
				Header: 'Column 3',
				accessor: 'col3',
			},
		],
		[]
	);
	const pageSizeOptions = [5, 10, 15, 20, 30, 60];

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		pageOptions,
		page,
		state,
		gotoPage,
		pageCount,
		previousPage,
		nextPage,
		setPageSize,
		canPreviousPage,
		canNextPage,
	} = useTable({ columns, data }, useFilters, useSortBy, usePagination);

	const { pageIndex, pageSize } = state;

	// forcePage = initialPage = 0, 但如果forcePage值沒改變, forcePage不會生效,
	// 所以必須在 handlePageClick 時塞一個值改變, 並於useEffect中加入:
	// 當pageSize改變, 就再次改變值為0 , 顯示點了第一個分頁
	const [initialPage, setInitialPage] = useState(0);
	const handlePageClick = (data) => {
		console.log(data);
		setInitialPage(data.selected);
		gotoPage(data.selected);
	};

	useEffect(() => {
		setInitialPage(0);
	}, [pageSize]);

	useEffect(() => {
		let i = 1;
		const mergeDatas = [];
		while (i <= 60) {
			mergeDatas.push({
				col1: `Hello-${i}`,
				col2: `World-${i}`,
				col3: `YES-${i}`,
			});
			i++;
		}
		setMyData(mergeDatas);
	}, []);

	return (
		<>
			<table
				className="table table-response table-bordered"
				{...getTableProps()}
			>
				<thead className="table-warning">
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<select
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
						gotoPage(0);
					}}
				>
					{pageSizeOptions.map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
				<span>
					Page {pageIndex + 1} of {pageOptions.length}
				</span>
				<ReactPaginate
					containerClassName="pagination"
					pageCount={pageCount}
					pageClassName="page-item"
					pageLinkClassName="page-link"
					previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
					previousClassName="page-item"
					previousLinkClassName="page-link"
					breakLabel="..."
					breakClassName="page-item"
					breakLinkClassName="page-link"
					nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
					nextClassName="page-item"
					nextLinkClassName="page-link"
					activeClassName="active"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3} // 中間分頁按鈕個數
					marginPagesDisplayed={2} // 頭尾分頁按鈕個數
					renderOnZeroPageCount={null}
					forcePage={initialPage}
				/>
			</div>
		</>
	);
};
export default Home;
