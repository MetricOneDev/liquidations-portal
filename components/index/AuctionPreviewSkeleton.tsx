/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';
import Skeleton from 'react-loading-skeleton';

export default function AuctionPreviewCard(): JSX.Element {
  return (
    <Box
      variant="cards.tight"
      sx={{
        p: [3, 3],
        borderRadius: 'medium',
        width: 304,
        height: 264
      }}
    >
      <Skeleton height={160} width={270} />
      <Flex sx={{ flexDirection: 'column', alignItems: 'space-between', mt: 2 }}>
        <Skeleton />
        <Skeleton />
      </Flex>
    </Box>
  );
}
