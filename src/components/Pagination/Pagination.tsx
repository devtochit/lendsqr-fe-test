import NextBtn from '../../components/Icons/NextBtn';
import PrevBtn from '../../components/Icons/PrevBtn';
import { getPaginationItems } from '../Pagination/lib/pagination';
import PageLink from './PageLink';
import './Pagination.scss';

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: any;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage,
}: Props) {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);
  

  return (
    <>
    <nav className="pagination" aria-label="Pagination">
      <PageLink
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <PrevBtn />
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => setCurrentPage(pageNum)}
        >
          {!isNaN(pageNum) ? pageNum : '...'}
        </PageLink>
      ))}
      <PageLink
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <NextBtn />
      </PageLink>
    </nav>
    </>
  );
} 
