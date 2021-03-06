import { useEffect, useState } from 'react'
import * as S from './styles'
import Link from 'next/link'

import { UserResponse } from 'models/user'
import Card from 'components/Card'

const UserInfo = ({
  avatar_url,
  bio,
  email,
  followers,
  following,
  login,
  name
}: UserResponse) => {
  const [userUrl, setUserUrl] = useState<string>('')

  useEffect(() => {
    if (login) {
      setUserUrl(`https://github.com/${login}?tab=`)
    }
  }, [login])

  return (
    <Card>
      <S.Wrapper>
        {avatar_url ? (
          <S.Picture>
            <img alt={`Avatar image for the user ${login}`} src={avatar_url} />
          </S.Picture>
        ) : null}
        <h2 data-testid="username">{name || login}</h2>
        {bio ? <p>{bio}</p> : null}
        {email ? <p>{email}</p> : null}
        {userUrl ? (
          <S.Followers>
            <Link href={`${userUrl}followers`} passHref={true}>
              <a
                data-testid="followers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>Followers: {followers}</small>
              </a>
            </Link>
            <Link href={`${userUrl}following`} passHref={true}>
              <a
                data-testid="following"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>Following: {following}</small>
              </a>
            </Link>
          </S.Followers>
        ) : null}
      </S.Wrapper>
    </Card>
  )
}

export default UserInfo
