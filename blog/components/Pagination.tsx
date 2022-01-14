import Link from "next/link";
import styled from "styled-components";
import { Icon } from "./ui/Icon";


const PaginationWrapper = styled.div`
    margin: auto;
    width: 80%; 
    padding: 0 0 10vh 0;

`

const PaginationNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`



const PageButton: any = styled.button`
    outline: none;
    border-radius: 5px;
    border: 1px solid var(--color-border);
    background: inherit;
    &:hover {
        ${(props: any) => props.disabled === true 
            ? `cursor: not-allowed;` 
            : `cursor: pointer; background: var(--color-fg-aux);`
        }

    }
`

const PaginationThumb = ({ href, icon, title, disabled }: any) => (
    <>
        {disabled ?
            <PageButton disabled={disabled}>
                <Icon noTitle name={icon} height={24} width={24} />
            </PageButton>
            :
            <Link href={href}>
                <PageButton>
                    <Icon title={title} name={icon} height={24} width={24} />
                </PageButton>
            </Link>
        }
    </>
)

export const Pagination = ({ totalPages, currentPage, slug }: any) => {
    const prevPage = parseInt(currentPage) - 1 > 0
    const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

    return (
        <PaginationWrapper>
            <PaginationNav>
                {!prevPage && (
                    <PaginationThumb disabled={!prevPage} icon="chevron-left" />
                )}
                {prevPage && (
                    <PaginationThumb
                        title="Previous page"
                        href={currentPage - 1 === 1 ? `/${slug}/` : `/${slug}/${currentPage - 1}`}
                        icon="chevron-left"
                    />
                )}
                <span>
                    {currentPage} of {totalPages}
                </span>
                {!nextPage && (
                    <PaginationThumb
                        title="Next page"
                        disabled={!nextPage}
                        icon="chevron-right"
                    />

                )}
                {nextPage && (
                    <PaginationThumb
                        title="Next page"
                        href={`/${slug}/${currentPage + 1}`}
                        icon="chevron-right"
                    />
                )}
            </PaginationNav>
        </PaginationWrapper>
    )
}
