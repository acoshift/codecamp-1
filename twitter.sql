create table users (
  id int auto_increment,
  username varchar(30) not null,
  email varchar(255) not null,
  status int not null default 0,
  password varchar(255) not null,
  name varchar(40) not null,
  photo varchar(255) not null default '',
  cover varchar(255) not null default '',
  theme varchar(10) not null default '',
  location varchar(100) not null default '',
  bio varchar(255) not null default '',
  birth_date_d int,
  birth_date_m int,
  birth_date_y int,
  show_dm boolean not null default false,
  show_y boolean not null default false,
  created_at timestamp not null default now(),
  primary key (id),
  unique (username),
  unique (email)
);

create table follows (
  follower_id int,
  following_id int,
  created_at timestamp not null default now(),
  primary key (follower_id, following_id),
  foreign key (follower_id) references users (id),
  foreign key (following_id) references users (id)
);

create table tweets (
  id int auto_increment,
  user_id int not null,
  content varchar(140) not null,
  type int not null,
  created_at timestamp not null default now(),
  primary key (id),
  foreign key (user_id) references users (id)
);

create table tweet_photos (
  id int auto_increment,
  tweet_id int,
  url varchar(255) not null,
  primary key (id),
  foreign key (tweet_id) references tweets (id)
);

create table hashtags (
  name varchar(30),
  created_at timestamp not null default now(),
  primary key (name)
);

create table tweet_hashtags (
  tweet_id int,
  hashtag varchar(30),
  primary key (tweet_id, hashtag),
  foreign key (tweet_id) references tweets (id),
  foreign key (hashtag) references hashtags (name)
);

create table tweet_polls (
  tweet_id int,
  end_time timestamp not null,
  primary key (tweet_id),
  foreign key (tweet_id) references tweets (id)
);

create table tweet_choices (
  id int auto_increment,
  tweet_id int not null,
  content varchar(25),
  primary key (id),
  foreign key (tweet_id) references tweet_polls (tweet_id)
);

create table votes (
  user_id int,
  tweet_id int,
  choice_id int,
  created_at timestamp not null default now(),
  primary key (user_id, tweet_id),
  foreign key (user_id) references users (id),
  foreign key (tweet_id) references tweets (id),
  foreign key (choice_id) references tweet_choices (id)
);

create table tweet_likes (
  user_id int,
  tweet_id int,
  created_at timestamp not null default now(),
  primary key (user_id, tweet_id),
  foreign key (user_id) references users (id),
  foreign key (tweet_id) references tweets (id)
);

create table retweets (
  user_id int,
  tweet_id int,
  content varchar(140) not null default '',
  created_at timestamp not null default now(),
  primary key (user_id, tweet_id),
  foreign key (user_id) references users (id),
  foreign key (tweet_id) references tweets (id)
);

create table tweet_replies (
  id int auto_increment,
  tweet_id int not null,
  user_id int not null,
  content varchar(140) not null,
  created_at timestamp not null default now(),
  primary key (id),
  foreign key (tweet_id) references tweets (id),
  foreign key (user_id) references users (id)
);

create table user_chats (
  id int auto_increment,
  sender_id int not null,
  receiver_id int not null,
  content varchar(255) not null,
  type int not null,
  created_at timestamp not null default now(),
  primary key (id),
  foreign key (sender_id) references users (id),
  foreign key (receiver_id) references users (id)
);

create table notifications (
  id int auto_increment,
  user_id int not null,
  title varchar(60) not null,
  content varchar(80) not null,
  photo varchar(255) not null,
  is_read boolean not null default false,
  created_at timestamp not null default now(),
  primary key (id),
  foreign key (user_id) references users (id)
);
