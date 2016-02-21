class trackit::profile::ui (
) {

  yumrepo { 'codyseibert':
    name => 'codyseibert',
    descr => 'codyseibert',
    gpgcheck => 0,
    enabled => 1,
    mirrorlist => absent,
    repo_gpgcheck => 0,
    baseurl => 'http://104.131.253.44/repo',
    ensure => present,
    http_caching => 'none',
    metadata_expire => 1
  }

  if defined (Firewall['100 allow http and https access']) == false {
    firewall { '100 allow http and https access':
      dport   => [80, 443],
      proto  => tcp,
      action => accept,
    }
  }

  if defined(Class['apache']) == false {
    class { 'apache':
      default_vhost => false,
      default_mods  => false,
    }
  }

  include apache::mod::dir

  if defined (Apache::Vhost['trackit.codyseibert.com']) == false {
    apache::vhost { 'trackit.codyseibert.com':
      docroot => '/var/www/html/trackit-ui',
      vhost_name => '*',
      port => 80,
      directoryindex => 'index.html',
    }
  }

  if defined (Service['httpd']) == false {
    service { 'httpd':
      enable => true,
      ensure => "running",
      require => Class['apache'],
    }
  }

  if defined (Package['trackit-ui']) == false {
    package { 'trackit-ui':
      ensure => 'latest',
      provider => 'yum',
    }
  }
}
